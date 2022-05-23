import React, { Component } from "react";
import { View, FlatList, StyleSheet, Image } from 'react-native';
import Card from "../components/Card";
import Loader from "../components/Loader";

class Home extends Component {
    constructor() {
        super()
        this.state= {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => this.setState({ data: data.results, loading: false }))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <View>
                {
                    this.state.loading ? 
                    <Loader/> :
                    <View>
                        <Image 
                            style={styles.img}
                            source={{ uri: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                            resizeMode="contain"
                        />
                        <Image 
                            style={styles.img}
                            source={require("../../assets/custom/Dog_Img.webp")}
                            resizeMode="contain"
                        />
                        <FlatList
                            data={ this.state.data }
                            keyExtractor={ (item) => item.id.toString() }
                            renderItem={ ({item}) =>  <Card name={ item.name }/>}
                        />
                    </View> 
                }
          </View>
        )
    }
};

const styles = StyleSheet.create({
    img: {
      width: 200,
      height: 200
    }
  });

export default Home;