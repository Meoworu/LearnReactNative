import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Music extends Component{
    render(){
        return(
            <View style={styles.box}>
                <Text>音乐</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    box:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ccc',
    }
})