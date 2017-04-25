import React, { Component } from 'react';
import { View, Text, Platform, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends Component {
 static navigationOptions = {
  tabBarLabel: 'Jobs' 
 };
  
 renderCard(item) {
  const initialRegion = {
   longitude: item.longitude,
   latitude: item.latitude,
   latitudeDelta: 0.045,
   longitudeDelta: 0.02
  };

  return (
   <Card title={item.jobtitle}>
    <View style={{ height: 300 }}>
     <MapView
      scrollEnabled={false}
      style={{ flex: 1 }}
      cacheEnabled={Platform.OS === 'android'}
      initialRegion={initialRegion}
     />
    </View> 
    <View style={styles.detailWrapperStyle}>
     <Text>{item.company}</Text>
     <Text>{item.formattedRelativeTime}</Text>
    </View>

    <Text>{item.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}</Text>
   </Card>
  );
 }

 renderNoMoreCards() {
  return (
   <Card title="No more jobs">
    <Button
     onPress={() => this.props.navigation.navigate('map')}
     backgroundColor="#03A9F4"
     icon={{ name: 'my-location' }} 
     title="Back To Map"
     large
    />
   </Card>
  ); 
 }

 render() {
  return (
   <View>
    <Swipe 
     data={this.props.results}
     renderCard={this.renderCard}
     renderNoMoreCards={this.renderNoMoreCards.bind(this)}
     onSwipeRight={item => this.props.likeJob(item, () => {
      ToastAndroid.showWithGravity(
       'Job added to likedJobs!', 
       ToastAndroid.SHORT, ToastAndroid.BOTTOM
      );
     })}
     keyProp="jobkey"
    />
   </View>
  );	
 }	
}

const styles = {
 detailWrapperStyle: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 10
 }
};

const mapStateToProps = state => {
 const { results } = state.job;

 return { results };
};

export default connect(mapStateToProps, actions)(DeckScreen);
