import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Contador(props) {
  return (
    <View  style={props.estilosCss.contadorContainer}>
      <Text>Haz acumulado {props.infoConteo} clicks</Text>
      <TouchableOpacity style={props.estilosCss.btnContador} onPress={()=>props.aumentar()}>
          <Text style={props.estilosCss.textContador}>AUMENTAR</Text>
      </TouchableOpacity>
    </View>
  )
}