import React from 'react'
import {View, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native'

function ImageMeme(){
    return(
        <View>
            <Image
                style={styles.image}
                source={require('../../../assets/ImageMeme/meme.png')}
                resizeMode='contain'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:200
    }
})

export default ImageMeme;