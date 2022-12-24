import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages/Messages';
import colors from './styles/colors';
import FlashMessage from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen
            name="Messages"
            options={{
              headerShown: true,
              title: 'Dertler',
              headerTitleAlign: 'center',
              headerTintColor: colors.darkgreen,
              headerRight: () => (
                <Icon
                  name="logout"
                  color={colors.darkgreen}
                  size={28}
                  onPress={ () => auth().signOut()}
                />
              ),
            }}
            component={Messages}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
