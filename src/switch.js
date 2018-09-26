import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

export default class SwitchEle extends Component{
    constructor(){
        super();
        this.state = {
            switchValue:false
        }
        this._onValueChange = this._onValueChange.bind(this);
    }
    _onValueChange(){
        this.setState({switchValue:!this.state.switchValue});
    }
    render(){
        return (
            <View style={styles.box}>
                <Switch 
                    onValueChange={this._onValueChange}
                    value={this.state.switchValue}
                    trackColor='#dc6b21'
                    ios_backgroundColor="#dc6b21"
                    thumbTintColor='grey'//手柄颜色
                    tintColor='#000'//关闭时候边框颜色
                    />
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
    }
})