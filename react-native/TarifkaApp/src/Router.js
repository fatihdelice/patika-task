import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title: 'Categories',
          headerTitleStyle: {
            color: '#ffa500',
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="MealsPage" component={Meals} options={{
          title: 'Meal',
          headerTitleStyle: {
            color: '#ffa500',
            fontWeight: 'bold',
          },
          headerTintColor: '#ffa500',
        }} />
        <Stack.Screen name="DetailsPage" component={Details} options={{
          title: 'Detail',
          headerTitleStyle: {
            color: '#ffa500',
            fontWeight: 'bold',
          },
          headerTintColor: '#ffa500',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Router;
