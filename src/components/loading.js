import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

let windowWidth = Dimensions.get('window').width;

export default class Loading extends Component{
    render(){
        return (
            <View style={styles.box}>
                <Image style={{height:50,width:50}}
                    source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.pngx'}}/>
            </View>
        )
    }
}
let styles = StyleSheet.create({
    box:{
        width:windowWidth,
        height:80,
        backgroundColor:'grey',
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})