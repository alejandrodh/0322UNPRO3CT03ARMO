import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Users from '../screens/Users';
import Profile from '../screens/Profile';
const Tab = createBottomTabNavigator()

export default function TabNavigation(props) {
  const {logout} = props.route.params
  
    return (
    <Tab.Navigator>
        <Tab.Screen name='Users' component={Users} />
        <Tab.Screen 
        name='Profile' 
        component={Profile} 
        initialParams={{
            logout: () => logout()
        }}
        />
    </Tab.Navigator>
  )
}