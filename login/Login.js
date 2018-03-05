import React from 'react'
import UsernameInput from './UsernameInput'
import PasswordInput from './PasswordInput'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button
  } from 'react-native'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      passwordActive: false
    }
  }

  logInPress = _ => {

  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.loginForm}>
          <Text style={styles.loginHeader}>
          Matt
          </Text>
          <UsernameInput></UsernameInput>
          <PasswordInput></PasswordInput>
          <Button
            style={styles.loginButton}
            onPress={this.logInPress}
            title="Log in"/>
        </View>
      </View>
    )
  }
}

const viewWidth = Dimensions.get('window').width
const viewHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#EB7F00',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginForm: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    flex: 0,
    width: viewWidth * .8,
  },
  loginHeader: {
    fontSize: 30,
    textAlign: 'center',
    padding: 6,
    alignSelf: 'stretch'
  },
  loginButton: {
    paddingTop: 10
  }
})
