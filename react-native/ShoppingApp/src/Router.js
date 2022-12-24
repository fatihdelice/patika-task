import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(state => state.userSession);
  const isAuthLoading = useSelector(state => state.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={Login} options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="ProductsPage" component={Products} options={{
            title: 'Dükkan',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerRight: () => <Icon name="logout" size={30} color="#fff" onPress={() => dispatch({ type: 'REMOVE_USER' })} />
          }} />
          <Stack.Screen name="DetailPage" component={Detail} options={{
            title: 'Detay',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff',
          }} />
        </Stack.Navigator>

      )}
    </NavigationContainer>
  );
};


export default Router;
