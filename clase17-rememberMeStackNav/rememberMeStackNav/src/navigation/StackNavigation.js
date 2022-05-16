import React, {Component} from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";
import { auth } from '../firebase/config';
import { StatusBar } from 'expo-status-bar';
import TabNavigation from './TabNavigation';


const Stack = createNativeStackNavigator()

class StackNavigation extends Component{
    constructor(props){
        super(props)
        this.state={
            loggedIn: true
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if(user){
                this.setState({loggedIn: true})
            }
        })
    }

    logout(){
        auth.signOut()
        .then(response => this.setState({loggedIn: false}))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        this.state.loggedIn ?
                        <Stack.Group>
                            <Stack.Screen 
                            name='TabNavigation' 
                            component={TabNavigation}
                            options={{
                                headerShown:false
                            }}
                            initialParams={
                                {
                                    logout: () => this.logout()
                                }
                            }
                            />
                        </Stack.Group>
                        :
                        <Stack.Group>
                            <Stack.Screen name='Register' component={Register}/>
                            <Stack.Screen name='Login' component={Login}/>
                        </Stack.Group>
                    }
                        
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}

export default StackNavigation