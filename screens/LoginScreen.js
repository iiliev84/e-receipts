
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Label
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <View>
    <Text style={styles.label}>Username:</Text>
    <TextInput
        style={styles.textInput}
    /></View>
    <View>
    <Text style={styles.label}>Password:</Text>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
    /></View>
    <View>
    <Text>Sign in</Text>
    </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
  },
  scroll: {
    backgroundColor: '#42A5F5',
    padding: 10,
    paddingTop:30,
    flexDirection: 'column'
},
  label: {
    color: '#424242',
    fontSize: 20
},
alignRight: {
    alignSelf: 'flex-end'
},
textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
},
});