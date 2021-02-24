import React, {Component}from 'react';
import {StyleSheet, View, Text,} from 'react-native';
import ImagemTeste from './src/components/ImagemTeste'
import BemVindo from './src/components/BemVindo'
import BtnEntrar from './src/components/BtnEntrar'



class App extends Component{
  render(){
    let nome = 'Daniel Pacheco';
    return( 
      <View style={styles.container} >
       <BemVindo style={styles.container}/>
        <Text style={styles.paragrafo}>Meu nome é <Text style={styles.textoDestacado} >{nome}</Text></Text>
        <ImagemTeste largura = {300} altura = {300} nomeNome = "Clique aqui para acessar"/>
        <BtnEntrar tituloBotao= "Entrar"/>
      </View>
    )   
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems:'center',
    margin: 20
  },
  paragrafo:{
    fontSize: 20,
    margin: 20
  },
  textoDestacado:{
    fontWeight: 'bold'
  }
})


export default App;