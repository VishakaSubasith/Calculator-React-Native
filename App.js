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
  TouchableOpacity,
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
    this.state={
      resultsText:""
    }
  }

  buttonPress(text){

    if(text=="="){
      return this.calculateValue(this.state.resultsText)
    }
    this.setState({
      resultsText:this.state.resultsText+text
    })

  }
  calculateValue(text){
     text = this.state.resultsText
  }

  operate(operations){

    switch(operations){
      case 'D':
        let text = this.state.resultsText.split('')
        text.pop()
      
        this.setState({
          resultsText:text.join('')
        })
    }



  }

  render (){

    let rows = []
    let numbrs =[[1,2,3],[4,5,6],[7,8,9],[".",0,"="]]
    for(let i=0;i<4;i++){
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push( <TouchableOpacity onPress={()=> this.buttonPress(numbrs[i][j])} style={styles.btn}><Text style={styles.btnText}>{numbrs[i][j]}</Text></TouchableOpacity>)
        
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let operations = ['D','+','-','*','/']
    let ops=[]
    for (let i = 0; i < 5; i++) {
      ops.push(<TouchableOpacity onPress={()=>this.operate(operations[i])} style={styles.btn}><Text style={[styles.btnText,styles.white]}>{operations[i]}</Text></TouchableOpacity>)
      
    }


    return (

      <View style={styles.container}>
           <View style={styles.result}>
             <Text style={styles.resultText}>{this.state.resultsText}</Text>
           </View>
           <View style={styles.claculation}>

           <Text style={styles.clactext}>9465</Text>
           </View>
           <View style={styles.buttons}>

           <View style={styles.numbers}>

            {rows}

           </View>
          
           <View style={styles.operations}>

           {ops}

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

},
btn:{
  flex:1,
  alignItems:"center",
  alignSelf:"stretch",
  justifyContent:"center"
},
btnText:{
  fontSize:30,

},
white:{
  color:"#ffffff"
}



});


