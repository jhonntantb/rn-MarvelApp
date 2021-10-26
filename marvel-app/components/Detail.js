import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Information from './Information';
import Comics from './Comics';
import apiParams from '../config.js';
import axios from 'axios';

const Tab = createBottomTabNavigator();


export default function Detail({route}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters/${route.params.id}`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results[0]))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log("AAAAAAAAAAA",route.params.id)
  console.log("dataaaaaa", data)
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Information') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Comics') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'darkred',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
        name="Information" 
        component={Information} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-outline" color={color} size={size} />
          )
        }}
        >
         {() => 
          (isLoading
            ? <ActivityIndicator size="large" color="#00ff00" /> 
            : <Information 
                name={data?.name}
                description={data?.description} 
              />
          )
        }
        </Tab.Screen>
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
  );
}
