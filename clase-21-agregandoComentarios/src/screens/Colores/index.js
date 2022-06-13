import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MiCamara from '../../components/Message/MiCamara'
export default function index() {
  return (
    <View style={styles.container}>
      <MiCamara />
    </View>
  )
}



















const styles = StyleSheet.create({
    container:{
        flex:1
    },
    subContainer1:{
        flex:1,
        backgroundColor:'red'
    },
    subContainer2:{
        flex:2,
        backgroundColor:'green'
    },
    subContainer3:{
        flex:3,
        backgroundColor:'blue'
    },
})