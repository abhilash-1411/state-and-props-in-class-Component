import React, {Component} from 'react';

import {Text,TextInput,View,Button} from 'react-native';
import Student from './components/Student';

class App extends Component{
  constructor(){
    super();
    this.state={
      name:"Adixoo",
    
    }
  }
  updateName(val){
    this.setState({name:val});
  }
 
  render(){
    return(

      <View>
      <Text style={{fontSize:30,color:'red'}}>{this.state.name}</Text>
      <TextInput
      placeholder='Enter Your name' onChangeText={(text)=>this.updateName(text)}/>
      <Button title='Submit' />
     <Student nmame={this.state.name}/>
      </View>
    )
  }
}

 

export default App;
