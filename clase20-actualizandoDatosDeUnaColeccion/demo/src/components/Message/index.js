import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {Component} from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { auth } from '../../firebase/config'

class Message extends Component {
    constructor(props){
        super(props)
        this.state={
            cantLikes:0,
            miLike:false,
            arrLikes:[],
            arrSubMessages:[]
        }
    };

    componentDidMount(){
        const documento = this.props.info.data
        const tieneMiLike = documento.likes.includes(auth.currentUser.email)

        if(documento.likes){
            this.setState({
                cantLikes: documento.likes.length
            })
        }
        if(tieneMiLike){
            this.setState({
                miLike:true
            })
        }
    }

    like(){
        this.setState({
            miLike:true,
            cantLikes: this.state.cantLikes + 1
        })
    }

    unlike(){
        this.setState({
            miLike:false,
            cantLikes: this.state.cantLikes - 1
        })
    }


    render(){
        const documento = this.props.info.data
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.messageOwner}>{documento.owner}</Text>
                    <Text style={styles.messageText}>{documento.message}</Text>
                </View>
                <View style={styles.containerLike}>
                    <Text style={styles.likesCounter}>{this.state.cantLikes}</Text>
                    {
                        this.state.miLike
                        ?
                        
                        <TouchableOpacity onPress={()=> this.unlike()}>
                            <FontAwesome name='heart' size={24} color='red'/> 
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=> this.like()}>
                            <FontAwesome name='heart-o' size={24} color='black' /> 
                        </TouchableOpacity>

                    }
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:8,
        paddingHorizontal:6,
        borderRadius:5,
        backgroundColor:'#F5E6E8',
        marginHorizontal:10,
        marginTop:8
    },
    messageOwner:{
        fontWeight:600
    },
    messageText:{
        paddingLeft:8,
        paddingVertical:8
    },
    containerLike:{
        flexDirection:'row',
    },
    likesCounter:{
        marginRight:8,

    }
})

export default Message