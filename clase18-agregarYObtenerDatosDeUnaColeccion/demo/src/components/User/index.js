import { View, Text, StyleSheet } from 'react-native';
import React, {Component} from 'react';

class User extends Component {
    constructor(props){
        super(props)
        this.state={
            nombre:'',
            email:'',
        }
    };

    render(){
        const documento = this.props.info.data
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Nombre: {documento.name}</Text>
                <Text style={styles.message}>Email: {documento.owner}</Text>
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
    message:{
        paddingLeft:8,
        paddingVertical:8
    }
})

export default User;