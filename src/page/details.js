import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Details extends Component{
    render(){
        return(
            <View style={styles.box}>
                <Text>详情</Text>
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