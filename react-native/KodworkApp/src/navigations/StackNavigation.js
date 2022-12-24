import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import { colors } from '../utils/colors';
import HeaderBar from '../components/HeaderBar';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name='DetailScreen' component={Detail} options={{
                headerTintColor: colors.mainPink,
                headerTitle: (props) => <HeaderBar {...props} />
            }} />
        </Stack.Navigator>
    )
}

export default StackNavigation;
