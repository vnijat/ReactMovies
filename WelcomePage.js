import React, { Component } from 'react'
import { Image, View, StatusBar } from 'react-native'



export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#666699',
            }}>
                <StatusBar hidden />
                <Image
                    source={require('./src/film.png')}
                    style={{
                        width: 300,
                        height: 300,
                    }} />
            </View>
        )
    }
}
