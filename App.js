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
      resultsText:"",
      calcText:""
    }
    this.operations = ['DEL','+','-','*','/']
  }

  buttonPress(text){

    if(text=="="){


      return this.validate && this.calculateValue(this.state.resultsText)
    }
    this.setState({
      resultsText:this.state.resultsText+text
    })

  }
  validate(){
    const text =this.state.resultsText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '/':
      case '*':
        return false
      
    }
    return true
  }
  calculateValue(){

     const text = this.state.resultsText
      
      this.setState({
        calcText:eval(text)
      })
  }

  operate(operations){

    switch(operations){
      case 'DEL':
        let text = this.state.resultsText.split('')
        text.pop()
      
        this.setState({
          resultsText:text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        const lastcarachtor = this.state.resultsText.split('').pop()
        if (this.operations.indexOf(lastcarachtor) >0) {
          return
          
        }
        if(this.state.resultsText == "" ) return
        this.setState({
          resultsText:this.state.resultsText + operations
        })
    }



  }

  render (){ 

    let rows = []
    let numbrs =[[1,2,3],[4,5,6],[7,8,9],[".",0,"="]]
    for(let i=0;i<4;i++){
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push( <TouchableOpacity key={numbrs[i][j]} onPress={()=> this.buttonPress(numbrs[i][j])} style={styles.btn}><Text style={styles.btnText}>{numbrs[i][j]}</Text></TouchableOpacity>)
        
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    
    let ops=[]
    for (let i = 0; i < 5; i++) {
      ops.push(<TouchableOpacity key={this.operations[i]} onPress={()=>this.operate(this.operations[i])} style={styles.btn}><Text style={[styles.btnText,styles.white]}>{this.operations[i]}</Text></TouchableOpacity>)
      
    }


    return (

      <View style={styles.container}>
           <View style={styles.result}>
             <Text style={styles.resultText}>{this.state.resultsText}</Text>
           </View>
           <View style={styles.claculation}>

    <Text style={styles.clactext}>{this.state.calcText}</Text>
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
  backgroundColor:"white",
  justifyContent:"center",
  alignItems:"flex-end"
},
claculation:{
  flex:1,
  backgroundColor:"white",
  justifyContent:"center",
  alignItems:"flex-end"
},
buttons:{
  flex:6,
  flexDirection:"row"
},
numbers:{
  flex:3,
 
  backgroundColor:"#434343"
},
operations:{
  flex:1,
  backgroundColor:"#636363",
  color:"white",
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
  margin:20,
  fontSize:30,
  color:"#000000",

},
resultText:{
  fontSize:40,
  margin:20,
  color:"#000000",

},
btn:{
  flex:1,
  alignItems:"center",
  alignSelf:"stretch",
  justifyContent:"center"
},
btnText:{
  fontSize:30,
  color:"white"

},
white:{
  color:"#ffffff"
}



});


