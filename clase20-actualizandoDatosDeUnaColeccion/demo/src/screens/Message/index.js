import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {Component} from 'react'


class NewMessage extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'',
        }
    }


    render(){
        return (
            <View>
              <Text>Enviale un mensaje a Facu</Text>
            <TextInput 
              style={styles.textarea}
              onChangeText= {(text)=> this.setState({
                  message: text
              })}
              value={this.state.message}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    this.props.route.params.newMessage(this.state.message)
                    this.setState({
                        message:''
                    })
                }}
            >
              <Text>Enviar mensaje</Text>
            </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    textarea:{
        borderWidth:1,
        borderColor:'#c3c3c3',
        height:'auto',
        minHeight:60,
        marginTop:10
    },
    btn:{
        marginTop:16,
        borderColor:'red',
        borderWidth:1
    }
})

export default NewMessage