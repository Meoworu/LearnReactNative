
import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, PixelRatio} from 'react-native';

const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

export default class Hello extends Component {
    render(){
        return (
            <View style={styles.container}>
              <Text>吴志祥</Text>
              <Text>一个逻辑像素等于{pixelRatio}实际像素单位</Text>
              <Text>屏幕的高度{height}逻辑像素</Text>
              <Text>屏幕的宽度{width}逻辑像素</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    fontColor:{
    
    }
})