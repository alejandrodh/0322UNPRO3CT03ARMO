import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native'
import React, {Component} from 'react'
import {auth, db} from '../../firebase/config'
import firebase from 'firebase'


class AddComment extends Component{
    constructor(props){
        super(props)
        this.state={
            arrComentarios:[],
            nuevoComentario:''
        }
    }


    componentDidMount(){
        const idDoc = this.props.route.params.id
        db.collection('messages').doc(idDoc).onSnapshot(doc => {
            this.setState({
                arrComentarios: doc.data().subMessages
            })
        })
    }

    onSubmit(comentario){

        const comentarioData = {
            owner: auth.currentUser.email,
            createdAt: Date.now(),
            description: comentario
        }

        const idDoc = this.props.route.params.id

        db
        .collection('messages')
        .doc(idDoc)
        .update({
            subMessages: firebase.firestore.FieldValue.arrayUnion(comentarioData)
        })

    }


    render(){
        return (
            <View>
                <FlatList
                    data={this.state.arrComentarios}
                    keyExtractor={item => item.createdAt.toString()}
                    renderItem={({item}) => <Text>{item.description}</Text> }
                />
                <View>
                    <TextInput
                        placeholder='Agrega tu comentario'
                        onChangeText={text => this.setState({
                            nuevoComentario: text
                        })}
                        value={this.state.nuevoComentario}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={()=> this.onSubmit(this.state.nuevoComentario)}>
                        <Text>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor:'red',
        height:50
    }
})

export default AddComment

