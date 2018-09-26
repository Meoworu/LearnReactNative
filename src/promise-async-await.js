import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AsyncEle extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'吴志祥'
        }
    }
    timePromise(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('已经执行');
            },1000,'天下第一');
        });
    }
    async getContent(){
        try{
            let str = await this.timePromise;
            console.log(str);
        }catch(err){
            console.log(err)
        }
        
    }
    render(){
        return (
            <View style={styles.box}>
                <Text style={styles.min} onPress={this.getContent}>{'作者:'+this.state.name}</Text>
                <Text style={styles.min} onPress={this.getContent}>{'promise'}</Text>
                <Text style={styles.min} >{'async'}</Text>
                <Text style={styles.min} >{'await'}</Text>
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
    },
    min:{
        fontSize:20,
        height:40,
        backgroundColor:'#461e1e',
        marginBottom: 20,
    }
})