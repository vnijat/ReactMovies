import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { stylesForNav } from '../src/Mystyles';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Movies from '../Movies/Movielist'

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Movies',
    headerStyle: { backgroundColor: '#1D2020' },
    headerTitleStyle: { color: 'white', fontFamily: 'a-dark-wedding1' },
  };
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <View style={stylesForNav.container}>
        <View style={{ backgroundColor: '#568795', borderRadius: 75, marginBottom: 20 }}>
          
        </View>
        <View style={{ alignContent: 'flex-start', width: 350, justifyContent: 'space-around' }}>
          <TouchableOpacity style={stylesForNav.btnStl} onPress={() => this.props.navigation.navigate('Movies')}>
            <Text style={[stylesForNav.btntxt]}>Movie</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    );
  }
}


const MyNav = createDrawerNavigator({
    Home: {
      screen: MainScreen,
    },
    Movies: {
      screen: Movies,
    },
  });



export const MainContainer = createAppContainer(MyNav)
