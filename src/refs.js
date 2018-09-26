import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class RefEle extends Component{
    constructor(props){
        super(props);
        this.state = {
            textInputValue:''
        }
        this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed(){
        let textInputValue = 'new vaule';
        this.setState({textInputValue});
        console.log(this.refs);
        this.refs.textInputRefer.setNativeProps({
            editable : false
        })
        this.refs.text2.setNativeProps({
            style:{
                color:'blue',
                fontSize: 30,
            }
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.buttonStyle}
                onPress={this.buttonPressed}>
                press me
                </Text>

                <Text style={styles.textPromptStyle}
                    ref={'text2'}>文字提示
                </Text>

                <View>
                    <TextInput style={styles.textInputStyle}
                        ref={'textInputRefer'}
                        value={this.state.textInputValue}
                        onChangeText={(textInputValue)=>this.setState({textInputValue})}/>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    buttonStyle:{
        fontSize:20,
        backgroundColor:'grey'
    },
    textPromptStyle:{
        fontSize:20
    },
    textInputStyle:{
        width:150,
        height:50,
        fontSize:20,
        backgroundColor:'grey'
    }
})