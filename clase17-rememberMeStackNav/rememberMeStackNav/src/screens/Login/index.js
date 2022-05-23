import { View, Text } from 'react-native'
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
    const {signIn} = this.props.route.params
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
            Register
          </Text>
        </TouchableOpacity>

        <Text>
          Ya tienes una cuenta?
        </Text>
        <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Login')}>
        <Text>
          Ir al login
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login