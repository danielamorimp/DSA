import React, {Component}from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';

import ImagemTeste from './src/components/ImagemTeste'
import BemVindo from './src/components/BemVindo'



class App extends Component{
  render(){
    return( 
      <View style={styles.container} >
       <BemVindo style={styles.container}/>
        <ImagemTeste largura = {300} altura = {300} nomeNome = "Clique aqui para acessar"/>

      </View>
    )   
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems:'center',
    margin: 20
  }
})


export default App;