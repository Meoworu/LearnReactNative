import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';

const widthOfMargin = Dimensions.get('window').width*0.5;
console.log(widthOfMargin);

export default class Inp extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneNum:'',
            passwordNum:'',
        };
        this.setPhone = this.setPhone.bind(this);
        this.getPhone = this.getPhone.bind(this);
    }    

    setPhone(num){
        this.setState(()=>{
            return {
                phoneNum:num
            }
        })
    }
    getPhone(){
        console.log(this.state);
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.inpStyle} onChangeText={this.setPhone} autoCapitalize="none" defaultValue="" placeholder={'请输入手机号'} selectionColor="#1fe477" 
                />
                <Text style={styles.textStyle}>您输入的手机号：{this.state.phoneNum}</Text>
                <TextInput style={styles.inpStyle} placeholder={'请输入手机号'}/>
                <Text style={styles.bigButtun} onPress={this.getPhone}>确定</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    inpStyle:{
        width: widthOfMargin,
        backgroundColor:'gray',
        borderColor: '#000',
        fontSize: 20,
    },
    textStyle:{
        width:widthOfMargin,
        fontSize:20,
    },
    bigButtun:{
        width:widthOfMargin
    }
})