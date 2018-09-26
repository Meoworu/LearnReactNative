import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ProgressViewIOS} from 'react-native';

export default class Progress extends Component{
    constructor(){
        super();
        this.state = {
            progress:0,
            interval:null
        }
        this.start = this.start.bind(this);
    }
    start(){
        this.interval = setInterval(()=>{
            if(this.state.progress<1){
                this.setState({progress:this.state.progress+0.01});
            }else{
                clearInterval(this.interval);
                console.log('定时器已经停止');
            }
            
        },10)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return (
            <View style={styles.box}>
                <ProgressViewIOS style={styles.progress}
                    progress={this.state.progress}
                    />
                <TouchableHighlight style={styles.button} onPress={this.start}
                    underlayColor={'#1e768e'}>
                    <Text style={styles.buttonText}>开始</Text>
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
        backgroundColor:'#ccc',
    },
    progress:{
        width:200,
        // height:20,
        backgroundColor:'grey'
    },
    button:{
        marginTop: 20,
        width:100,
        height:40,
        backgroundColor:'#2bb599',
        borderRadius: 6,
    },
    buttonText:{
        lineHeight:40,
        textAlign:'center',
        fontSize:20,
    }
})