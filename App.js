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
  Button,
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
           <View style={styles.result}>
             <Text style={styles.resultText}>2121</Text>
           </View>
           <View style={styles.claculation}>

           <Text style={styles.clactext}>9465</Text>
           </View>
           <View style={styles.buttons}>

           <View style={styles.numbers}>
           <View style={styles.row}>
            <Button title="0"/>
            <Button title="0"/>
            <Button title="0"/>
           </View>
           <View style={styles.row}>

            <Button title="0"/>
            <Button title="0"/>
            <Button title="0"/>

           </View>
           <View style={styles.row}>
            <Button title="0"/>
            <Button title="0"/>
            <Button title="0"/>
           </View>
           <View style={styles.row}>
            <Button title="0"/>
            <Button title="0"/>
            <Button title="0"/>
           </View>

           </View>
           <View style={styles.operations}>

           <Button title="+"/>
            <Button title="+"/>
            <Button title="+"/>
            <Button title="+"/>

           </View>


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
  backgroundColor:"red",
  justifyContent:"center",
  alignItems:"flex-end"
},
claculation:{
  flex:1,
  backgroundColor:"green",
  justifyContent:"center",
  alignItems:"flex-end"
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
  backgroundColor:"black",
  justifyContent:"space-around",
  alignItems:"stretch"
},
row:{
  flex:1,
  flexDirection:"row",
  justifyContent:"space-around",
  alignItems:"center"
},
clactext:{
  fontSize:24,
  color:"#ffffff",

},
resultText:{
  fontSize:20,
  color:"#ffffff",

}



});


