import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, { Component } from 'react'
import WelcomePage from './WelcomePage'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

            currentScreen: 'Welcome'
        };
        setTimeout(() => {
            this.setState({
                currentScreen: 'App'
            })
        }, 2000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Welcome' ? <WelcomePage /> : <App />
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => Main);
