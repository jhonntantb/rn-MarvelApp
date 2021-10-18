import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import Information from './Information';
import Comics from './Comics';

const Tab = createBottomTabNavigator();

const Detail = () => {
    return (
        <Tab.Navigator
        initialRouteName="Information"
        screenOptions={{
                tabBarActiveTintColor: 'darkred'
            }}
        >
            <Tab.Screen 
            name="Information" 
            component={Information} 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle" color={color} size={size} />
                )
            }}
            />
            <Tab.Screen 
            name="Comics" 
            component={Comics} 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
                )
            }}
            />

        </Tab.Navigator>
    )
}

export default Detail
