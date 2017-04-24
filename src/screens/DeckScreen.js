import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView, Constants } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
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
      cacheEnabled={Platform.OS === 'android' ? true : false}
      initialRegion={initialRegion}
     >
     </MapView>
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
   </Card>
  ); 
 }

 render() {
  return (
   <View style={styles.containerStyle}>
    <Swipe 
     data={this.props.results}
     renderCard={this.renderCard}
     renderNoMoreCards={this.renderNoMoreCards}
     keyProp="jobkey"
    />
   </View>
  );	
 }	
}

const styles = {
 containerStyle: {
  paddingTop: Constants.statusBarHeight
 },
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

export default connect(mapStateToProps, null)(DeckScreen);
