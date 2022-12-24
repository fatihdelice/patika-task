import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import { colors } from '../utils/colors';
import FavoriteJobs from '../pages/FavoriteJobs';

const Drawer = createDrawerNavigator();

function DrawerNavigaton(){
    return (
        <Drawer.Navigator screenOptions={{drawerActiveTintColor : colors.mainPink}}>
            <Drawer.Screen name='StackNavigation' component={StackNavigation} options={{headerShown : false, title : "Jobs"}} />
            <Drawer.Screen name='FavoriteJobs' component={FavoriteJobs} options={{headerShown : false, title : "Favorite Jobs"}} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigaton;