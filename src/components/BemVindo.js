import React, {Component}from 'react';
import {
  View,
  Text,
  StyleSheet

} from 'react-native';

class BemVindo extends Component{
    render(){
      return(
        <View style={styles.container} >
          <Text>{'Olá Seja Bem-Vindo!'}</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems:'center',
      margin: 20,
    },
  })
  

  export default BemVindo;