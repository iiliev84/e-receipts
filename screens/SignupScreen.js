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
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
const util=require('util');

var url = 'https://6cl2u8dzoi.execute-api.us-east-2.amazonaws.com/StageOne/sqlmethods';

export default class SignupScrenn extends React.Component {
	  static navigationOptions = {
    title: 'Sign Up',
  };
constructor(props) {
    super(props);
     this.state = {
      username:'',
      password:'',
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      result:'',
    }
  }
 
_handlePress(){
	console.log(this.state.username);
	console.log(this.state.password);
	console.log(this.state.firstname);
	console.log(this.state.lastname);
	console.log(this.state.email);
	console.log(this.state.phone);
	console.log(this.state.result);
	var data = {userName: this.state.username, userPassword: this.state.password, firstName: this.state.firstname, lastName: this.state.lastname, email: this.state.email, phone: this.state.phone};

	fetch(url, {
  method: 'POST',
  body: JSON.stringify(data), 
}).then(res => res.json())
.catch(error => Alert.alert('Error'))
.then(response => Alert.alert('Success'));
	}


  render() {
const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <View><Text style={styles.TitleText}>E-Receipts</Text></View>
    <View>
    <Text>
         User Name:
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({username:text})}
        />
    </View>
     <View>
    <Text>
         Password:
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({password:text})}
        />
    </View>
     <View>
    <Text>
         First Name:
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter first name"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({firstname:text})}
        />
    </View>
     <View>
    <Text>
         Last Name:
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Last Name"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({lastname:text})}
        />
    </View>
     <View>
    <Text>
        Email:
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter email"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({email:text})}
        />
    </View>
     <View>
    <Text>
         Phone:
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter phone"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({phone:text})}
        />
    </View>
    <View  style={styles.buttonContainer}>
     <Button
     onPress={() => this._handlePress()}
  	title="Sign Up"
  	color="#ffffff"
  	accessibilityLabel="Sign Up button"
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
    height:1000
  },
  scroll: {
    backgroundColor: '#C62828',
    padding: 10,
    paddingTop:30,
    height:1000,
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
    height: 40,
    fontSize: 30,
    backgroundColor: '#FFF'
},
});