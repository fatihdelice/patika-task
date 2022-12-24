import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import DrawerNavigaton from './navigations/DrawerNavigation';


const Router = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <DrawerNavigaton />
            </NavigationContainer>
        </Provider>
    )
}


export default Router