
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
  AppRegistry,
  KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StackNavigator,
} from 'react-navigation';

export default class LoginScreen extends React.Component {
static navigationOptions = {
    title: 'Welcome to E-Receipts',
  }

  onPressSignin(){
    Alert.alert('You tapped the button!!!');
  }

  render() {
    return (
      <KeyboardAvoidingView
     behavior="padding"
     style={styles.container}
   >
      <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <View><Text style={styles.TitleText}>E-Receipts</Text></View>
      <View>
    <TextInput
        style={styles.textInput}
        placeholder='Username'
    /></View>
    <View>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder='Password'
    /></View>
    <View style={styles.buttonContainer}>
    <Button style={styles.buttonContainer}
  onPress={this.onPressSignin}
  title="Sign In"
  accessibilityLabel="Sign In button"
/>
</View>
<View style={styles.signupbtn}>
    <Button
    title="Don't have account? Sign Up Here"
    onPress={() => this.props.navigation.navigate('SignupScreen')}
    accessibilityLabel="Sign up button"
    />
    </View>
        </ScrollView>
      </View>
      </KeyboardAvoidingView>
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
  fontSize:20,
  paddingTop:20,
  color:'#FFFFFF',
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight:'bold'
},
 buttonContainer: {
  margin: 20,
  borderRadius: 4,
  backgroundColor: '#29B6F6',
  },
  signupbtn:{
    margin: 20,
    borderRadius: 4,
  },
  label: {
    color: '#F5F5F5',
    fontSize: 20
},
alignRight: {
    alignSelf: 'flex-end'
},
textInput: {
  height: 34,
  margin: 20,
  marginBottom: 0,
  fontSize: 16,
  paddingHorizontal: 10,
  borderRadius: 4,
  borderColor: '#ccc',
  borderWidth: 1,
  backgroundColor: '#FFF'
},
});
AppRegistry.registerComponent('LoginPage', () => App);
