import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

function ImageMeme(){
    return(
        <View>
            <Image
                style={styles.image}
                source={require('../../../assets/ImageMeme/meme.png')}
                resizeMode='contain'
            />
            <Image
                style={styles.image}
                source={{uri: 'https://plantillasdememes.com/img/plantillas/unos-pedillos01644105227.png'}}
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