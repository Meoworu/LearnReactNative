import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
export default class HeadEle extends Component{
    render(){
        return (
            <View style={styles.headBox}>
                <Text style={styles.headText}>
                    {this.props.head}
                </Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    headBox:{
        marginTop: 20,
        width:winWidth,
        height:45,
        backgroundColor:'#15b534',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headText:{
        backgroundColor:'grey'
    }
})