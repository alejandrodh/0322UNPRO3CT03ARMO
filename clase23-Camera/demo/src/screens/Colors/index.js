import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import MyCamera from '../../components/MyCamera'
import MiCamara from '../../components/MiCamara'

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
        backgroundColor:'red',
        flex:1
    },
    subContainer2:{
        backgroundColor:'blue',
        flex:2
    },
    subContainer3:{
        backgroundColor:'green',
        flex:3
    },
})