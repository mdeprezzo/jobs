import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../actions';

class MapScreen extends Component {
 state = {
  region: {
   longitude: -122,
   latitude: 37,
   longitudeDelta: 0.04,
   latitudeDelta: 0.09
  }
 };

 onPress() {
  this.props.fetchJobs(this.state.region, () => {
   this.props.navigation.navigate('deck'); 
  }); 
 }

 onRegionChangeComplete(region) {
  this.setState({ region });
 }

 renderJobsMarker() {
  console.log(this.props.results.length);
  return this.props.results.map((job, i) => {
   const { latitude, longitude } = job;
    
   return (
    <MapView.Marker
     key={i}
     coordinate={{ latitude, longitude }}
     title={job.jobtitle}
    />
   );
  });
 }

 render() {
  return (
   <View style={{ flex: 1 }}>
    <MapView 
     style={{ flex: 1 }}
     region={this.state.region} 
     onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
    >
     {this.renderJobsMarker()}
    </MapView>

    <View style={styles.buttonContainerStyle}>
     <Button 
      large
      title="Search This Area"
      backgroundColor="#009688"
      icon={{ name: 'search' }}
      onPress={this.onPress.bind(this)}
     />
    </View>
   </View>
  );	
 }	
}

const styles = {
 buttonContainerStyle: {
  position: 'absolute',
  bottom: 20,
  left: 0,
  right: 0
 } 
};

const mapStateToProps = state => {
 const { results } = state.job;

 return { results };
};

export default connect(mapStateToProps, actions)(MapScreen);
