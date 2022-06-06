import React, {Component} from 'react'
import { auth, db } from '../firebase/config';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TabNavigation from './TabNavigation';
import NewMessage from '../screens/NewMessage'
import Comments from '../screens/Comments';

const Stack = createNativeStackNavigator()

class StackNavigation extends Component{
    constructor(props){
        super(props)
        this.state={
            loggedIn: false,
            errorMessage:'Error1'
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

    
    signUp(email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then(response => this.setState({logedIn: true}))
        .catch(error => this.setState({errorMessage:error.message}))
    }


    signIn(email, password){
        auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            this.setState({
                loggedIn:true
            })
        })
        .catch(error =>this.setState({errorMessage: error.message}))
    }
    
    newMessage(message){
        db.collection('messages').add({
            owner:auth.currentUser.email,
            createdAt: Date.now(),
            message:message,
            likes:[],
            subMessages:[]
        })
        .then(response => console.log(response))
        .catch(error => console.log(error.message))
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
                                    logout: () => this.logout(),
                                    errorMessage: this.message
                                }
                            }
                            />
                            <Stack.Screen
                                name='Message'
                                component={NewMessage}
                                initialParams={{
                                    newMessage: (message)=> this.newMessage(message)                                    
                                }}
                            />
                            <Stack.Screen
                            name='Comments'
                            component={Comments}
                            />
                        </Stack.Group>
                        :
                        <Stack.Group>
                            <Stack.Screen 
                                name='Register' 
    
                                children={
                                    (props)=> <Register 
                                    signUp={(email, password)=> this.signUp(email, password)}
                                    errorMessage={this.state.errorMessage}
                                    {...props}
                                    />
                    
                                }
                                options={{
                                    headerShown:false
                                }}
                            />
                            <Stack.Screen 
                            name='Login' 
                            component={Login}
                            initialParams={{
                                signIn: (email, password)=> this.signIn(email, password)
                            }}
                            options={{
                                headerShown:false
                            }}
                            />
                        </Stack.Group>
                    }
                        
                </Stack.Navigator>
    </NavigationContainer>

        )
    }

}

export default StackNavigation