import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, {Component} from 'react'
import {db} from '../../firebase/config'
import User from '../../components/User'

class Users extends Component {
    constructor(props){
        super(props)
        this.state={
            info:[],
            loading: true
        }
    }

    componentDidMount(){
        db.collection('users').onSnapshot(
            (docs) => {
                let users = []
                docs.forEach( doc => { users.push({
                                        id:doc.id,
                                        data: doc.data()})
                                }
                );
                this.setState({
                    info: users,
                    loading:false
                })
            }
        )
    };

    render(){
        return (
            <View>
                <Text>Users</Text>
                {
                    this.state.loading ?
                    <ActivityIndicator size={32} color='red'/>
                    : 
                    <FlatList
                    data={this.state.info}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <User info={item}/>}
                    />
                }
            </View>
        )
    }
};

export default Users;