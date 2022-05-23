import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, {Component} from 'react'
import {db} from '../../firebase/config'


class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      info:[],
      loading:true
    }
  }

  componentDidMount(){
    db.collection('messages').onSnapshot(
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
        }, ()=> console.log(this.state.data))

      }
    )

  }

  render(){
    console.log(this.state.data)
    return (
      <View>
       <Text>Home</Text>

        {
         this.state.loading ?
         <ActivityIndicator size={32} color='red'/>
         : 
         <FlatList
         data={this.state.info}
         keyExtractor={item => item.id.toString()}
         renderItem={({ item }) => <Text>{item.data.message}</Text>}
         />
         }



        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Message')}>
          <Text>Enviar mensaje a Facu</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home