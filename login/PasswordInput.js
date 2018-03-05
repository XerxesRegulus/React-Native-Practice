import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated
  } from 'react-native'

export default class PasswordInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      passwordLabelMarginTop: new Animated.Value(16),
      passwordLabelFontSize: new Animated.Value(22),
      passwordLabelColor: '#000',
      passwordBorderBottomWidth: new Animated.Value(1),
      passwordTextOpacity: new Animated.Value(0),
      passwordTextDisplay: 'none'
    }
  }

  labelClick = _ => {
    this.labelAndInputAnimation(13, 0, 0, "#cecece", 1, 'flex')
    this.refs.usernameTextInput.focus()
  }

  textChange = (text) => {
    if(text.length > 0) {
      this.labelAndInputAnimation(13, 0, 0, "#cecece", 1, 'flex')
    } else {
      this.labelAndInputAnimation(22, 16, 1, "#000", 0, 'none')
      this.refs.usernameTextInput.blur()
    }
  }

  labelAndInputAnimation = (
    labelFontSize,
    labelMarginTop,
    labelBottomBorder,
    labelColor,
    inputOpacity,
    inputDisplay) => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.passwordLabelFontSize,
          {
            toValue: labelFontSize,
            duration: 200
          }
        ),
        Animated.timing(
          this.state.passwordLabelMarginTop,
          {
            toValue: labelMarginTop,
            duration: 200
          }
        ),
        Animated.timing(
          this.state.passwordBorderBottomWidth,
          {
            toValue: labelBottomBorder,
            duration: 200
          }
        )
      ]),
      Animated.timing(
        this.state.passwordTextOpacity,
        {
          toValue: inputOpacity,
          duration: 200
        }
      )
    ]).start()
    this.setState({passwordTextDisplay: inputDisplay})
    this.setState({passwordLabelColor: labelColor})
  }


  render() {
    return (
      <View style={styles.loginSection}>
        <Animated.Text
          style={{
            color: this.state.passwordLabelColor,
            marginTop: this.state.passwordLabelMarginTop,
            textAlign: 'left',
            paddingBottom: 2,
            fontSize: this.state.passwordLabelFontSize,
            borderBottomWidth: this.state.passwordBorderBottomWidth}}
          onPress={this.labelClick}>
          Password
        </Animated.Text>
        <Animated.View
          style={{
            opacity: this.state.passwordTextOpacity,
            display: this.state.passwordTextDisplay
          }}>
          <TextInput
            style={{
              padding: 8,
              margin: 0
            }}
            onChangeText={(text) => { this.textChange(text) }}
            ref='usernameTextInput'>
          </TextInput>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginSection: {
    margin: 5
  },
  loginLabel: {
    color: '#cecece',
    marginTop: 5,
    textAlign: 'left'
  }
})
