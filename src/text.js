import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

export default class Span extends Component{
    constructor(props){
        super(props);
        this.state = {
            num:''
        }
        this.setNum = this.setNum.bind(this);
    }
   
    setNum(num){
        this.setState(()=>{
            return {
                num : num
            }
        })
    }
    render(){
        return (
            <View style={styles.box}>
                <Text style={styles.textStyle}>{this.state.num}</Text>
                <TextInput autoCapitalize="none" onChangeText={this.setNum} style={{backgroundColor:'#999',width:200, height:40}}/>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    box:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    textStyle:{
        fontSize: 20,
        color:'green',
        backgroundColor:'#ed7864',
        width:200,
        height:40,
        textAlign:'center',
        lineHeight:40,
    }
})