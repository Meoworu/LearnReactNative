import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ListView, RefreshControl } from 'react-native';

import Loading from './components/loading.js';

export default class ListEle extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr : [
                {name:'吴志祥'},
                {name:'杨幂'},
                {name:'赵丽颖'},
                {name:'李沁'},
                {name:'佟丽娅'},
                {name:'王丽坤'},
                {name:'刘亦菲'},
                {name:'唐嫣'},
                {name:'小燕子'},
                {name:'吴志祥'},
                {name:'杨幂'},
                {name:'赵丽颖'},
                {name:'李沁'},
                {name:'佟丽娅'},
                {name:'王丽坤'},
                {name:'刘亦菲'},
                {name:'唐嫣'},
                {name:'小燕子'},
            ],
            hor:[
                {name:'吴志祥'},
                {name:'杨幂'},
                {name:'赵丽颖'},
                {name:'李沁'},
                {name:'佟丽娅'},
                {name:'王丽坤'},
                {name:'刘亦菲'},
                {name:'唐嫣'},
                {name:'小燕子'},
                {name:'吴志祥'},
                {name:'杨幂'},
            ],
            refreshing:false
        }
        this.scrollList = this.scrollList.bind(this);
    }
    scrollList(){
        let arr = this.state.arr;
        return (
            arr.map((item, index)=>(<View style={styles.min} key={index}><Text style={styles.minText}>{item.name}</Text></View>))
        )
    }
    horList(){
        let arr = this.state.hor;
        return (
            arr.map((item, index)=>(<View style={styles.hor} key={index}><Text style={styles.minText}>{item.name}</Text></View>))
        )
    }
    _onRefresh(){
        console.log(11111);
        this.setState({refreshing:true});
        setTimeout(()=>{
            this.setState({refreshing:false})
        },2000)
    }
    render(){
        return (
            <View>
                <ScrollView style={styles.box}
                    refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this._onRefresh.bind(this)}
                          tintColor={'#46b10a'}
                        />
                      }>
                    {this.scrollList()}
                </ScrollView>
            </View>
            
        )
    }
}

let styles = StyleSheet.create({
    box:{
        backgroundColor:'#ccc',
        marginTop: 20,
    },
    min:{
        flex:1,
        height:50,
        backgroundColor:'#80c349',
        borderBottomWidth: 1,
        borderColor:'#000',
    },
    minText:{
        flex:1,
        textAlign:'center',
        lineHeight:40,
    },
    hor:{
        height:40,
        width:100,
    }
})