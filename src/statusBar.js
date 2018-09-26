import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text, Clipboard} from 'react-native';

export default class StatusBarEle extends Component{
    constructor(props){
        super(props);
        this.state = {
            str:'吴志祥是好人'
        }
        this.getContent = this.getContent.bind(this);
    }
    componentDidMount(){
        Clipboard.setString('hello world');
    }
    async getContent(){
        //Clipboard是剪切板api
        let str = await Clipboard.getString();//promise对象
        console.log(str);
        this.setState({str});
    }
    render(){
        return (
            <View style={styles.box}>
                <StatusBar
                    animated={true}
                    hidden={false}
                    barStyle={'light-content'}
                    /*backgroundColor={'bule'}*/
                />
                <Text onPress={this.getContent}>{this.state.str}</Text>
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