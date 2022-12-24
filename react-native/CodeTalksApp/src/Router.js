import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Sign from './pages/Sign';
import auth from '@react-native-firebase/auth';
import colors from './styles/colors';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen
            name="Rooms"
            options={{
              headerShown: true,
              title: 'Odalar',
              headerTitleAlign: 'center',
              headerTintColor: colors.primary,
              headerRight: () => (
                <Button
                  title="logout"
                  color={colors.primary}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
            component={Rooms}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default Router;