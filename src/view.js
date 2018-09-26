import React, {Component} from 'react';
import {StyleSheet, View } from 'react-native';

export default class LearnRN extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.fiestRow}>
                    <View style={styles.test1}></View>
                    <View style={styles.test2}></View>
                    <View style={styles.test3}></View>
                </View>
                <View style={styles.test4}></View>
                <View style={styles.testPosititon}></View>
            </View>
        )
    }
}
let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    fiestRow:{
        height:40,
        // top:40,
        marginTop: 40,
        backgroundColor:'black',
        justifyContent:'space-around',
        flexDirection: 'row',
        alignItems: 'center',

    },
    test1:{
        width:68,
        height:24,
        backgroundColor:"white",

    },
    test2:{
        width:40,
        height:24,
        backgroundColor:'white',

    },
    test3:{
        width:100,
        height:24,
        backgroundColor:"white",

    },
    test4:{
        height:40,
        // top:40,
        backgroundColor:'#7cd018',
    },
    testPosititon:{
        backgroundColor:'grey',
        height:60,
        width:60,
        position:'absolute',
        top:150,
        right:50,
    }
})