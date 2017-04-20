import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
 static navigationOptions = ({ navigation }) => ({
  title: 'Review Jobs',
  headerRight: (
   <Button 
    title="Settings" 
    onPress={() => navigation.navigate('settings')}
   />
  )  
 });

 render() {
  return (
   <View>
    <Text>Review Screen</Text>
    <Text>Review Screen</Text>
    <Text>Review Screen</Text>
    <Text>Review Screen</Text>
    <Text>Review Screen</Text>
    <Text>Review Screen</Text>
   </View>
  );	
 }	
}

export { ReviewScreen };
