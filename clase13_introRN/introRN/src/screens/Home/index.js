import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Contador from '../../components/Contador'
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            conteo:0
        }
    }
    saludo(parametro){
        console.log(parametro)
    }
    click(){
        this.setState({
            conteo: this.state.conteo + 1
        })
    }

  render() {
    return (
      <View style={estilosCss().container}>
          <Text>Mi primer contador en RN</Text>
        <TouchableOpacity styles={estilosCss().touchable} onLongPress={()=> this.saludo('Pase como parametro este gran saludo a la consola')}>
            <Text style={estilosCss().touchable}>Clickeame</Text>
        </TouchableOpacity>
        <Contador estilosCss={estilosCss()} infoConteo={this.state.conteo} aumentar={()=> this.click()}/>
      </View>
    )
  }
}

const estilosCss = () => StyleSheet.create({
    container:{
        textAlign: 'center',
        padding: 10,
    },
    touchable:{
        padding: 4,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 4,
    },
    text:{
        fontWeight: 'bold'
    },
    contadorContainer:{
        marginVertical: 4
    },
    btnContador:{
        padding: 7,
        backgroundColor: 'rgba(0,255,0, 0.5)',
        marginBottom: 10,
        borderRadius: 4,
    },
    textContador:{
        fontWeight: 'bold'
    }

})

export default Home