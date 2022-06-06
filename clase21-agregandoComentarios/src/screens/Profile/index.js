import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Profile(props) {
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={()=> props.route.params.logout()}>
          <Text>
              Cerrar sesion
          </Text>
      </TouchableOpacity>
    </View>
  )
}