import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Live extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'吴志祥'
        }
    }
    componentWillMount(){//渲染前执行
        console.log('componentWillMount');
    }
    render(){
        console.log('render');
        return (
            <View style={styles.box}>
                <Text>{this.state.name}</Text>
            </View>
        )
    }
    componentDidMount(){//渲染完成之后立即执行
        // this.setState({name:'六天了'})
        //let data = await fetch('http://clt.vroot.win/e2942lfh5ipva/data/ledger');
        fetch('http://clt.vroot.win/e2942lfh5ipva/data/ledger').then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
        console.log('componentDidMount');
    }
    componentWillReceiveProps(props){//当有新的props传入时执行
        console.log(props);
    }
    shouldComponentUpdata(props, state){//当组件第一次渲染后如果props或者state发生变化执行
        console.log('shouldComponentUpdata');
    }
    componentWillUpdata(nextProps, nextState){
        //当组件将要更新前执行
    }
    componentDidUpdata(prevProps, prevState){
        //当组件更新后执行
    }
    componentWillUnMount(){
        //当组件将要卸载时候执行
    }
    componentDidUnmount(){
        //当组建卸载完成之后执行
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