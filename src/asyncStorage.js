import React, {Component} from "react";
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';

export default class Storage extends Component{
    async componentDidMount(){
        try{
            await AsyncStorage.setItem('name','吴志祥');//设置数据
            console.log('存储数据成功');
        }catch(err){
            console.log(err);
        }
    }
    async mergeContent(){//
        try{
            await AsyncStorage.mergeItem('name','哈哈哈');//修改数据,使用覆盖方式也可以修改数据
            console.log('修改数据成功');
        }catch(err){
            console.log(err);
        }
    }
    async getContent(){
        try{
            let name = await AsyncStorage.getItem('name');//获得数据
            console.log(name);
        }catch(err){
            console.log(err);
        }
    }
    async clearContent(){
        try{
            await AsyncStorage.clear();//清除数据
            console.log('清除成功');
        }catch(err){
            console.log(err);
        }
    }
    

    render(){
        return (
            <View style={styles.box}>
                <Text onPress={this.getContent}>{'AsyncStorage'}</Text>
                <Text onPress={this.mergeContent}>{'修改数据'}</Text>
                <Text onPress={this.clearContent}>{'清除'}</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    box:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'grey'
    }
})