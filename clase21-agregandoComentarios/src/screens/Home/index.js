import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import React, {Component} from 'react'
import {db, auth} from '../../firebase/config'
import Message from '../../components/Message'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      info:[],
      loading:true
    }
  }
//onSubmit(email){
  componentDidMount(){
    db.collection('messages').orderBy('owner', 'desc').limit(5).onSnapshot(
      (docs)=>{
        let messages = []
        docs.forEach(
          doc => {
            messages.push({
              id:doc.id,
              data: doc.data()
            })
          }
        )
        this.setState({
          info:messages,
          loading:false
        })
      }
    )

  }

  render(){
    return (
      <View style={styles.container}>
       <Text>Estos son los Messages recientes:</Text>

        {
         this.state.loading ?
         <ActivityIndicator size={32} color='red'/>
         : 
         <FlatList
         data={this.state.info}
         keyExtractor={item => item.id.toString()}
         renderItem={({ item }) => <Message info={item} navigation={this.props.navigation}/>}
         />
         }



        <TouchableOpacity style={styles.btn} onPress={()=> this.props.navigation.navigate('Message')}>
          <Text style={styles.textBtn}>Enviar mensaje a Facu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=> this.props.navigation.navigate('Colores')}>
          <Text style={styles.textBtn}>Ir a ver colores</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  btn:{
    flex:1,
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'#192A51',
    paddingVertical:16,
    paddingHorizontal:8,
    marginHorizontal:'auto',
    marginBottom:40
  },
  textBtn:{
    color:'white'
  }
})

export default Home