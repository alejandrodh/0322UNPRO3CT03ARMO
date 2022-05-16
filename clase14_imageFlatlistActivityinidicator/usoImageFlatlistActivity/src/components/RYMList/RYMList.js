import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CardRYM from '../CardRYM'
export default function RYMList(props) {
  return (
    <Flatlist
        data = {props.data}
        keyExtractor = {item => item.id.toString()}
        renderItem = {({item}) => <CardRYM data={item} />}
    />
  )
}