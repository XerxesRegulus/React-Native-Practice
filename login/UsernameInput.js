import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated
  } from 'react-native'

export default class UsernameInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      usernameLabelMarginTop: new Animated.Value(16),
      usernameLabelFontSize: new Animated.Value(22),
      usernameLabelColor: '#000',
      usernameBorderBottomWidth: new Animated.Value(1),
      usernameTextOpacity: new Animated.Value(0),
      usernameTextDisplay: 'none'
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
          this.state.usernameLabelFontSize,
          {
            toValue: labelFontSize,
            duration: 200
          }
        ),
        Animated.timing(
          this.state.usernameLabelMarginTop,
          {
            toValue: labelMarginTop,
            duration: 200
          }
        ),
        Animated.timing(
          this.state.usernameBorderBottomWidth,
          {
            toValue: labelBottomBorder,
            duration: 200
          }
        )
      ]),
      Animated.timing(
        this.state.usernameTextOpacity,
        {
          toValue: inputOpacity,
          duration: 200
        }
      )
    ]).start()
    this.setState({usernameTextDisplay: inputDisplay})
    this.setState({usernameLabelColor: labelColor})
  }


  render() {
    return (
      <View style={styles.loginSection}>
        <Animated.Text
          style={{
            color: this.state.usernameLabelColor,
            marginTop: this.state.usernameLabelMarginTop,
            textAlign: 'left',
            paddingBottom: 2,
            fontSize: this.state.usernameLabelFontSize,
            borderBottomWidth: this.state.usernameBorderBottomWidth}}
          onPress={this.labelClick}>
          Username/Email
        </Animated.Text>
        <Animated.View
          style={{
            opacity: this.state.usernameTextOpacity,
            display: this.state.usernameTextDisplay
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
