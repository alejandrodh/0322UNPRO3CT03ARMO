import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {Component} from 'react'
import { auth } from '../../firebase/config';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      userName:'',
      password:'',
      logedIn:false,
      error:null
    }
  }

  
  componentDidMount(){
    console.log(this.props)
    auth.onAuthStateChanged((user)=>{
      console.log(user)
    })
  }
  
  onSubmit(email, password){
    auth.createUserWithEmailAndPassword(email, password)
    .then(response => this.setState({logedIn: true}, ()=> console.log(this.state.logedIn)))
    .catch(error => this.setState({error: 'Fallo'}, ()=> console.error(error)))
  
  }
  
  render(){
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
          keyboardType='email-address'
          placeholder='email'
        />
        <TouchableOpacity onPress={() => this.onSubmit(this.state.email, this.state.password)}>
          <Text>
            Register
          </Text>
        </TouchableOpacity>

        <Text>
          Ya tienes una cuenta?
        </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
        <Text>
          Ir al login
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:'red'
  }
})

export default Register
