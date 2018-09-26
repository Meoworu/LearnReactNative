import React, {Component} from 'react';
import {View, Button, StyleSheet, DatePickerIOS} from 'react-native';

export default class ButtonEle extends Component{
    constructor(){
        super();
        this.state = {
            date = new Date(),
        }
        this.setDate = this.setDate.bind(this);
    }

    click(){}
    button(){//按钮
        return (
            <Button title="click" onPress={this.click} color={'#d8940a'}/>
        )
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate})
    }
    dateTime(){
        return (
            <DatePickerIOS
                date={this.state.chosenDate}
                onDateChange={this.setDate}/>
        )
    }
    render(){
        return (
            <View style={styles.box}>
                {this.dateTime()}
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