import React, {Component} from 'react';
import {View, StyleSheet, Button, TouchableHighlight} from 'react-native';

class BtnEntrar extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.BtnEntrar}
                >
                    <Button title={this.props.tituloBotao}/>
                </TouchableHighlight>
            </View>
        )
    }
}

export default BtnEntrar;

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    BtnEntrar:{
        height: 40,
        width: 100,
        backgroundColor: 'black'
    },
})