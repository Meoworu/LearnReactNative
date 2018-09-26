import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';


import { NavigationActions } from 'react-navigation';
import Head from '../components/head.js';

const windowWidth = Dimensions.get('window').width;
const navigateAction = NavigationActions.navigate({
  routeName: 'Movie',

  params: {},

  action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),
});
export default class IndexEle extends Component{
    static navigationOptions = ()=>{
        return {
            title:'首页',//导航栏标题
            //header:()=>(<Head head='首页'/>),//返回react元素的函数，当他为空时隐藏导航栏
            headerTitle:'首页',
            // headerBackTitle:'返回'
            
        }
    }
    routeJump(){
        // this.props.navigation.navigate('Home', {name:'刘天亮'});//路由跳转
        // this.props.navigation.push('Home', {name:'吴志祥'});
        // this.props.navigation.replace('Home', {name:'刘天亮'});//路由替换
        this.props.navigation.dispatch(navigateAction);//通过NavigationActions生成一个对象用dispatch发送出去产生对应操作
    }
    componentDidMount(){
        console.log(this.props.navigation.state);
    }
    render(){
        return(
            <View style={styles.box}>
                <Text>首页</Text>
                <TouchableHighlight style={styles.click}
                    onPress={this.routeJump.bind(this)}
                    underlayColor={'#19900f'}>
                    <Text style={styles.button}>
                        跳转
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
    },
    head:{
        marginTop:20,
        backgroundColor:'grey',
        height:45,
        width:windowWidth,
    }
})