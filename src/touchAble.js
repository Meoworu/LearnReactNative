import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';

export default class TouchEle extends Component{
    buttonClick(){
        console.log(11111);
    }
    show(){
        console.log('show');
    }
    hide(){
        console.log('hide');
    }
    render(){
        return (
            <View style={styles.box}>
                <TouchableOpacity
                    activeOpacity={0.5}>
                    <Text style={styles.min} ellipsizeMode='tail' numberOfLines={1}>TouchableOpacity 吴志祥是好人</Text>
                </TouchableOpacity>
                <TouchableHighlight onPress={this.buttonClick} underlayColor={'#1e768e'} onShowUnderlay={this.show} onHideUnderlay={this.hide}>
                    <Text style={styles.min2}>TouchableHighlight</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    box:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor :'#ccc'
    },
    min:{
        backgroundColor:'#23e297',
        width:200,
        height:40,
        lineHeight:40,
        textAlign:'center'
    },
    min2:{
        backgroundColor:'#4ab52b',
        width:200,
        height:40,
        lineHeight:40,
        textAlign:'center'
    }

})