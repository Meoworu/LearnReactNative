import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class Home extends Component{
    routeJump(){
        this.props.navigation.goBack();
        //this.props.navigation.pop();//
    }
    componentDidMount(){
        console.log(this.props.navigation.state);
        console.log(this.props.navigation.getParam('name'));//获取路由传参数
    }
    render(){
        return(
            <View style={styles.box}>
                <Text>Home</Text>
                <TouchableHighlight style={styles.click}
                    onPress={this.routeJump.bind(this)}
                    underlayColor={'#19900f'}>
                    <Text style={styles.button}>
                        点击
                    </Text>
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
    click:{
        backgroundColor:'#24bf16',
        borderRadius: 5,
        marginTop: 20,
    },
    button:{
        width:100,
        height:40,
        lineHeight:40,
        textAlign:'center',
        fontSize:20,
    }
})