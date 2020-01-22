import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { stylesForNav } from '../src/Mystyles';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Movies from '../Movies/Movielist'


class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
                source={require('../src/drawer.png')}
                style={{ width: 25, height: 25, marginLeft: 5 }}
            />
        </TouchableOpacity>
    </View>
      );
    }
  }


class MainScreen extends Component {
  static navigationOptions = {
    title: 'Home',
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

const FirstActivity = createStackNavigator({
    
    First: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Main',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const SeconActivity = createStackNavigator({
    Second: {
      screen: Movies,
      navigationOptions: ({ navigation }) => ({
        title: 'Movies',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });




const MyNav = createDrawerNavigator({
    Home: {
      screen: FirstActivity,
    },
    Movies: {
      screen: SeconActivity,
    },
    
  });


export const MainContainer = createAppContainer(MyNav)
