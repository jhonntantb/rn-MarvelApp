import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import Information from './Information';
import Comics from './Comics';
import apiParams from '../config.js';
import axios from 'axios';

const Tab = createBottomTabNavigator();

const Detail = () => {
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
            >
                {() => 
                (isLoading
                ? <ActivityIndicator size="large" color="#00ff00" /> 
                : <Information 
                    image={`${data?.thumbnail?.path}.${data.thumbnail.extension}`}
                    name={data.name}
                    description={data.description} 
                    />
                )}
            </Tab.Screen>
            <Tab.Screen 
            name="Comics" 
            component={Comics} 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
                )
            }}
            >
                {() => 
                (isLoading
                ? <ActivityIndicator size="large" color="#00ff00" /> 
                : <Comics
                listComics={data?.comics?.items} 
                />
                )}
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default Detail
