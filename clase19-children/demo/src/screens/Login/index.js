import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {Component} from 'react'

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:''
    }
  }
  
  render(){
    const {signIn} = this.props
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({email: text})}
          keyboardType='email-address'
          placeholder='email'
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({password: text})}
          keyboardType='default'
          placeholder='password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btn} onPress={() => signIn(this.state.email, this.state.password)}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>

        <Text>
         No tienes una cuenta?
        </Text>
        <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Register')}>
        <Text>
          Ir al register
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:'red',
    marginTop:16
  },
  btn:{
    flex:1,
    marginVertical:16,
    padding:16,
    borderWidth:1,
    borderColor:'blue'
  }
})

export default Login