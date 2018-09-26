import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class TouchEle extends Component{
    constructor(props){
        super(props);
    }
    touchStart(event){
        console.log(event.nativeEvent);
    }
    touchMove(event){
        console.log(event);
    }
    touchEnd(event){
        console.log(event);
    }
    layout(event){
        console.log(event);
        console.log(event.nativeEvent.layout);
    }
    render(){
        return (
            <View style={styles.box}
            onTouchStart={this.touchStart}
            onTouchMove={this.touchMove}
            onTouchEnd={this.touchEnd}
            onLayout={this.layout}
            ></View>
        )
    }
}

let styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor:'#ccc',
    }
})