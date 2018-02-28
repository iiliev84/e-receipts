import React from 'react';
import {ScrollView, 
		StyleSheet,
		Text,
		View,
		Image,
		AppRegistry		} from 'react-native';

export default class ReceiptsScreen extends React.Component {
  static navigationOptions = {
    title: 'Receipts',
  };

  render() {
    return (
	 <ScrollView style={styles.container}>
      <View style={styles.row}><Text style={{fontSize:28,textAlign: 'center',}}>Receipts List</Text></View>
	  <View style={styles.row}>
	  <Text>Receipt 1</Text>
	  <Image
		  source={require('../assets/images/fake-receipt-template1.jpg')}
style={styles.imageStyle}		  /></View>
		<View style={styles.row}>
		<Text>Receipt 2</Text>
		<Image
		  source={require('../assets/images/receipt2.png')} style={styles.imageStyle}/></View>
	  </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  row:{
	padding: 15,
    marginBottom: 5,
	backgroundColor: 'white',
  },
  imageStyle:{
	  width:200,
	  resizeMode: 'contain',
  },
});