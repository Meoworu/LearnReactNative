import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export default class Loading extends Component{
    render(){
        return (
            <View style={styles.box}>
                <ActivityIndicator
                    color="#1ca3cc"
                    size={'large'}/>
                <ActivityIndicator
                    color="#58cc1c"
                    size={'small'}
                    animating={true}/*控制显示隐藏*//>

            </View>
        )
    }
}

let styles = StyleSheet.create({
    box:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'grey',
    }
})