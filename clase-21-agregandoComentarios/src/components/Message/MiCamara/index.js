import React, {Component} from 'react'
import {Camera} from 'expo-camera'
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import {storage} from '../../../firebase/config'
class MiCamara extends Component{
    constructor(props){
        super(props)
        this.state = {
            permisos:false,
            mostrarCamara:true,
            urlFoto:''
        }
        this.metodosDeCamara = undefined
    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
        .then(response => {
            this.setState({
                permisos:true,
                urlFoto:''
            })
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    tomarLaFoto(){
        this.metodosDeCamara.takePictureAsync()
        .then(response => {
            this.setState({
                urlFoto: response.uri,
                mostrarCamara: false
            })

        })
        .catch(error =>console.log(error))
    }

    guardarFoto(){
        fetch(this.state.urlFoto)
        .then(response => response.blob())
        .then(image => {
            const ref = storage.ref(`fotosDeLaTarde/${Date.now()}.jpg`)
            ref.put(image)
            .then(response =>{
                ref.getDownloadURL()
                .then(url => this.props.cuandoSubaLaImagen(url))
                .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }

    descartarFoto(){
        this.setState({
            urlFoto:'',
            mostrarCamara:true
        })
    }

    render(){
        return(
            <>
            
            {
                this.state.permisos
                ?
                    this.state.mostrarCamara === false 
                    ?
                    <View style={styles.container}>
                        <Image
                        style={styles.camara}
                        source={{uri: this.state.urlFoto}}
                        />
                        <View>
                            <TouchableOpacity onPress={()=> this.guardarFoto()}>
                                <Text>Guardar foto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> this.descartarFoto()}>
                                <Text>Descartar foto</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={styles.container}>
                        <Camera
                        style={styles.camara}
                        type={Camera.Constants.Type.back}
                        ref={ (metodos) => this.metodosDeCamara = metodos}
                        />
                        <View style={styles.buttons}>
                            <TouchableOpacity onPress={()=> this.tomarLaFoto()}>
                                <Text>Tomar la foto</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                :
                <Text>No tienes permisos</Text>
            }
            </>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    camara:{
        flex:9
    },
    buttons:{
        flex:1
    }
})

export default MiCamara