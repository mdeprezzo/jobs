import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';

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

 onPress(url) {
  Linking.openURL(url);
 }

 renderLikedJobs() {
  return this.props.likes.map(item => {
   const { 
    url, jobkey, company, longitude, 
    latitude, formattedRelativeTime, jobtitle
   } = item;

   const initialRegion = {
    longitude, latitude, latitudeDelta: 0.045, longitudeDelta: 0.02    
   };
     
   return (
    <Card key={jobkey} title={jobtitle}>
     <View style={{ height: 200 }}>
      <MapView
       style={{ flex: 1 }}
       cacheEnabled={Platform.OS === 'android'}
       scrollEnabled={false}
       initialRegion={initialRegion}
      />
      <View style={styles.detailWrapperStyle}>
       <Text style={styles.italicsStyle}>{company}</Text>
       <Text style={styles.italicsStyle}>{formattedRelativeTime}</Text>
      </View>
      <Button
       title="Apply Now!"
       backgroundColor="#03AF94"
       onPress={this.onPress.bind(this, url)}
      />
     </View>
    </Card>
   );  
  }); 
 }

 render() {
  return (
   <ScrollView>
    {this.renderLikedJobs()}
   </ScrollView>
  );	
 }	
}

const styles = {
 detailWrapperStyle: {
  marginTop: 10,
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-around'
 },
 italicsStyle: {
  fontStyle: 'italic'
 }
};

const mapStateToProps = state => {
 const { likes } = state.job;

 return { likes };
};

export default connect(mapStateToProps, null)(ReviewScreen);
