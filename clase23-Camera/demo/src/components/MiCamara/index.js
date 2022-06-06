import React, {Component} from 'react'
import { Camera } from 'expo-camera'
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native'
import {storage} from '../../firebase/config'

class MiCamara extends Component {
    constructor(props){
        super(props)
        this.state={
            mostrarCamara: true,
            permisos:false,
            urlFoto: ''
        }
        this.metodosDeCamara = undefined
    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
        .then(response => this.setState({permisos:true}))
        .catch(error => console.log(error))

    }

    tomarLaFoto(){
        this.metodosDeCamara.takePictureAsync()
        .then(foto => this.setState({
            urlFoto: foto.uri,
            mostrarCamara: false
        }))
        .catch(error => console.log(error))
    }

    aceptarFoto(){
        fetch(this.state.urlFoto)
        .then(response =>  response.blob())
        .then( image => {
                const ref = storage.ref(`fotos/${Date.now()}.jpg`)
                ref.put(image)
                .then(response => {
                    ref.getDownloadURL()
                    .then(url => {
                        console.log(this.props)
                        this.props.cuandoSubaLaImagen(url)
                    })
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
            <View style={styles.container}>
                {
                    this.state.permisos
                    ?
                        this.state.mostrarCamara === false
                        ?
                        <>
                            <Text>Aqui vamos a mostrar la imagen y el aceptar y rechazar</Text>
                            <Image
                            style={styles.camara}
                            source={{uri: this.state.urlFoto}}
                            />
                            <View style={styles.buttons}>
                                <TouchableOpacity onPress={()=> this.aceptarFoto()}>
                                    <Text>Aceptar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> this.descartarFoto()}>
                                    <Text>Rechazar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                        :
                        <>
                            <Camera
                            style={styles.camara}
                            type={Camera.Constants.Type.back}
                            ref={metodos => this.metodosDeCamara = metodos}
                            />
                            <View style={styles.buttons}>
                                <TouchableOpacity onPress={()=> this.tomarLaFoto()}>
                                    <Text>Tomar la foto</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    :
                    <Text>No tenes permiso para usar la Camara</Text>
                }
            </View>
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