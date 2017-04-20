import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
 renderLastSlide(idx) {
  if (idx === this.props.data.length - 1) {
   return (
    <Button 
     buttonStyle={styles.buttonStyle}
     title="Onwards!" 
     raised
     onPress={this.props.onComplete}
    />
   ); 
  }
 } 

 renderSlides() {
  return this.props.data.map((slide, i) => {
   return (
    <View 
     key={i} 
     style={[styles.slideStyle, { backgroundColor: slide.color }]}
    >
     <Text style={styles.textStyle}>{slide.text}</Text>
     {this.renderLastSlide(i)}
    </View>
   );
  });
 }

 render() {
  return (
   <ScrollView
    horizontal
    pagingEnabled
    style={{ flex: 1 }}
   >
    {this.renderSlides()}
   </ScrollView>
  );	
 }	
}

const styles = {
 slideStyle: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: SCREEN_WIDTH
 },	
 textStyle: {
  fontSize: 30,
  color: '#FFF',
  textAlign: 'center'
 },
 buttonStyle: {
  backgroundColor: '#0288D1',
  marginTop: 15
 }
};

export default Slides;
