import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
 static navigationOptions = () => ({
  title: 'Settings'
 });

 render() {
  return (
   <View style={styles.containerStyle}>
    <Button 
     title="Reset Liked Jobs"
     icon={{ name: 'delete-forever' }}
     backgroundColor="#F44336"
     onPress={() => this.props.clearLikedJobs(() => {
      ToastAndroid.showWithGravity(
       'All liked jobs has been deleted',
       ToastAndroid.SHORT, ToastAndroid.BOTTOM
      );
     })}
     large
    />
   </View>
  );	
 }	
}

const styles = {
 containerStyle: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 }
};

export default connect(null, { clearLikedJobs })(SettingsScreen);
