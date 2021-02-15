import React, {Component}from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button
} from 'react-native';

class ImagemTeste extends Component{
    render(){
      let imagem = 'https://i.ibb.co/qMCS2Hn/ljacr1m5ilplscdc2s76jg1se5-14b38d000458ab12c4124ec711da7fc3.png'
      return(
        <View style={styles.container}>
          <Image
            source = {{uri: imagem}}
            style = {{width: this.props.largura, height: this.props.altura}}
          />
          <Text>{this.props.nomeNome}</Text>
          <Button
            title = "Entrar"
            color = "black"
            onPress = {""}
          />
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

  export default ImagemTeste;