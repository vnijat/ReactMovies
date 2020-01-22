import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import ImageCard from './ImageCard'
import { createDrawerNavigator } from 'react-navigation-drawer';

let url = 'http://api.tvmaze.com/search/shows?q='

export default class Movies extends Component {
  static navigationOptions = {
    
    drawerLabel: 'Movies',
    headerStyle: { backgroundColor: '#11473F' },
    headerTitleStyle: { color: 'white', fontFamily: 'a-dark-wedding1' },
  };
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      link: '',
    }
  }
  componentDidMount() {
    this.reguestUrl(url)
  }


  reguestUrl = async (URL) => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      console.log("URL is wrong")
    }
  }
  searchUpdated(answer) {
    this.setState({ searchText: answer })
  }

  createurl = (searchText) => {
    const link = url + searchText;
    this.setState({link})
    this.reguestUrl(link)
  }
  render() {
    const { data } = this.state
    return (
      <View style={{flex: 1, backgroundColor: '#070839'}}>
        <ScrollView>
        <View>
          <Text style={styles.textStyle}>Hi, you can search here some films</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.TIstyle}
            placeholder='Search'
            placeholderTextColor='#8A5992'
            onChangeText={(answer) => { this.searchUpdated(answer) }}
          ></TextInput>
          <View style={{
            flex: 1, 
            backgroundColor: '#070839', 
            alignContent: 'center',
            borderColor: '#8A5992',
            borderTopWidth: 1,
          }}>
            <TouchableOpacity onPress={() => this.createurl(this.state.searchText)} >
              <Image
                style={{ width: 55, height: 55 }}
                source={require('./images/film.png')} />
            </TouchableOpacity>
          </View>
        </View>
          <View style={styles.maincontainer}>
            {data.map(item => (
              <ImageCard data={item} key={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    )

  }
}


const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#070839',
    flex: 1,
  },
  textStyle: {
    justifyContent: 'center',
    color: '#8A5992',
    fontSize: 28,
    backgroundColor: '#070839',
    fontFamily: 'theater-afisha'
  },
  viewStyle: {
    backgroundColor: '#070839',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
  },
  container: {
    alignContent: 'center',
    flexDirection: 'row',
    paddingBottom: 10,

  },
  sub: {
    borderRadius: 10,
    backgroundColor: 'gray',
    shadowOpacity: 0.4,
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'gray'
  },
  cover: {
    borderRadius: 10
  },
  TIstyle: {
    flex: 7,
    height: 40,
    borderColor: '#8A5992',
    borderTopWidth: 1,
    height: 56,
    backgroundColor: '#070839',
    fontSize: 28,
    color: '#8A5992',
    fontFamily: 'theater-afisha'
  },

})