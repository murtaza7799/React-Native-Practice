import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, TouchableOpacity, Image, ToastAndroid} from 'react-native';

export default class App extends React.Component {
 


  constructor(props){
    super(props);

    this.state={
      a:10,
      flag:10,
      b:90,
      username:'',
    }

    console.log('Contructor');
  }

  UNSAFE_componentWillMount(){
    console.log('WillMount');


  }


  akhzarAction(){
    Alert.alert('Btn Pressed');
  }
  

  render(){
    
    const onPresssignin = () => {
      
      ToastAndroid.show("Login Button Click !", ToastAndroid.SHORT);};
    const onPresssignup = () => {ToastAndroid.show(" Signup Button Click !", ToastAndroid.SHORT);};

    return (
     

      <View style={styles.container}>
         <Image style={styles.image} source={require("./download.png")}  style={{width: 200, height: 200, borderRadius: 200/2 , marginBottom: 100}}  />
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
         
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={onPresssignin}>
          <Text style={styles.loginText} on>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ onPresssignup}>
          <Text style={styles.loginText}>Signup</Text>
          
        </TouchableOpacity>

      </View>
    );
  }

  componentDidMount(){
    console.log('DidMount');
    this.setState({flag:50000})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },

 
  loginText:{
    color:"white"
  }
});


