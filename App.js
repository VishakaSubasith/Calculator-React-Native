/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  constructor(){
    super()
    this.state={}
  }
  render (){
    return (

      <View style={styles.container}>
           <View style={styles.result}></View>
           <View style={styles.claculation}></View>
           <View style={styles.buttons}>

           <View style={styles.numbers}></View>
           <View style={styles.operations}></View>


           </View>
           




      </View>
     
        
      );
  }

 
};

const styles = StyleSheet.create({
  
container:{
  flex:1
},
result:{
  flex:2,
  backgroundColor:"red"
},
claculation:{
  flex:1,
  backgroundColor:"green"
},
buttons:{
  flex:6,
  flexDirection:"row"
},
numbers:{
  flex:3,
  backgroundColor:"yellow"
},
operations:{
  flex:1,
  backgroundColor:"black"
}


});


