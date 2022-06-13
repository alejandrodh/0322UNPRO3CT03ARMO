import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {Component} from 'react'
import MyCamera from '../../components/MyCamera'
import MiCamara from '../../components/MiCamara'

class NewMessage extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'',
            mostrarComponenteCamara: true,
            urlFoto:''
        }
    }

    cuandoSubaLaImagen(url){
        console.log(url)
        this.setState({
            mostrarComponenteCamara:false,
            urlFoto: url
        })
    }

    newMessage(message, urlFoto){
        db.collection('messages').add({
            owner:auth.currentUser.email,
            createdAt: Date.now(),
            message:message,
            likes:[],
            subMessages:[],
            foto:urlFoto
        })
        .then(response => console.log(response))
        .catch(error => console.log(error.message))
    }

    render(){

        return (
            <>
            {
                this.state.mostrarComponenteCamara ?
                <MiCamara cuandoSubaLaImagen={(url)=> this.cuandoSubaLaImagen(url)}/>
                :

                <View>
                    <Text>Enviale un mensaje a Facu</Text>
                    <TextInput 
                    style={styles.textarea}
                    onChangeText= {(text)=> this.setState({
                        message: text
                    })}
                    value={this.state.message}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            this.props.route.params.newMessage(this.state.message, this.state.urlFoto)
                            this.setState({
                                message:'',
                            })
                            this.props.navigation.navigate('Home')
                        }}
                    >
                        <Text>Enviar mensaje</Text>
                    </TouchableOpacity>
                </View>
            }
            </>

        )
    }
}

const styles = StyleSheet.create({
    textarea:{
        borderWidth:1,
        borderColor:'#c3c3c3',
        height:'auto',
        minHeight:60,
        marginTop:10
    },
    btn:{
        marginTop:16,
        borderColor:'red',
        borderWidth:1
    }
})

export default NewMessage