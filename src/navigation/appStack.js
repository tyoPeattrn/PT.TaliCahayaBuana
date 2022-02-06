import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import screen3x3 from '../screens/screen3x3'
import screen4x4 from '../screens/screen4x4'
import screen5x5 from '../screens/screen5x5'

export default function appStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="screen3x3" component={screen3x3} />
            <Stack.Screen name="screen4x4" component={screen4x4} />
            <Stack.Screen name="screen5x5" component={screen5x5} />
            

        </Stack.Navigator>
    );
}
