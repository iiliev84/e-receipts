
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Label,
  Button,
  Alert,
  AppRegistry
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StackNavigator,
} from 'react-navigation';

export default class LoginScreen extends React.Component {
static navigationOptions = {
    title: 'Welcome',
  }

  onPressSignin(){
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <View><Text style={styles.TitleText}>E-Receipts</Text></View>
      <View>
    <Text style={styles.label}>Username:</Text>
    <TextInput
        style={styles.textInput}
        placeholder='Username'
    /></View>
    <View>
    <Text style={styles.label}>Password:</Text>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder='Password'
    /></View>
    <View style={styles.buttonContainer}>
    <Button
  onPress={this.onPressSignin}
  title="Sign In"
  color="#ffffff"
  accessibilityLabel="Sign In button"
/>
    </View>
    <View style={styles.buttonContainer}>
    <Button
    title="Don't have account? Sign Up Here"
    onPress={() => this.props.navigation.navigate('SignupScreen')}
    color="#FFFFFF"
    accessibilityLabel="Sign up button"
    />
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
    backgroundColor: '#C62828',
    padding: 10,
    paddingTop:30,
    flexDirection: 'column'
},
TitleText:{
  fontSize:30,
  paddingTop:20,
  color:'#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight:'bold'
},
 buttonContainer: {
    margin: 20
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
AppRegistry.registerComponent('LoginPage', () => App);