import React, {Component} from 'react'
import {StyleSheet, View, Text, PixelRatio} from 'react-native'

let pixel = PixelRatio.get();

export default class FlexDome extends Component{
    static colorArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    constructor(props){
        super(props);
        this.state = {
            color:'#309da2'
        }
        this.setColor = this.setColor.bind(this);
    }
    setColor(){
        let color = '#';
        for(let i=0; i<6; i++){
            let j = Math.floor(Math.random()*16);
            color += FlexDome.colorArr[j];
        }
        this.setState(()=>({color}))
    }


    print(){
        console.log(2222);
    }
    render(){
        return (
            <View style={styles.box}>
                <View style={styles.min1}>
                    <View style={styles.test1}></View>
                    <View style={styles.test2}></View>
                    <View style={styles.test3}></View>
                    <View style={styles.test4}></View>
                </View>
                <View style={styles.min2} onPress={this.print}>
                    <Text style={[styles.minBox, {backgroundColor:this.state.color}]} onPress={()=>this.setColor()}></Text>
                </View>
                <Text style={styles.trans}></Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:'#3cb34b'

    },
    trans:{
        width:50,
        height:50,
        backgroundColor:'#333',
        transform:[{rotateZ:'45deg'}],//变换
    },  
    min1:{
        height:200,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor:'#ccc',
    },
    min2:{
        width:200,
        height:200,
        backgroundColor:'#6e9de4c4',
        // padding: 100,
        //opacity:0.5,//透明度
        borderStyle:'solid',
        borderColor: '#c8fb19',//边框颜色
        borderWidth:1/pixel,//一个物理像素款的边框
        borderRadius:100,//边框圆角
    },
    minBox:{
        width:100,
        height:100,
        backgroundColor:'#ca8621c4',
        margin: 50,
    },
    test1:{
        width:50,
        // flex:1,
        height:50,
        backgroundColor:'#2b907d',
        transform:[{scale:1.2}],//变换
        
    },
    test2:{
        width:50,
        height:50,
        backgroundColor:'#2b9033',
        transform:[{rotateY:'45deg'},{skewY:'45deg'}]//旋转加倾斜
    },
    test3:{
        width:50,
        height:50,
        backgroundColor:'#6f9842',
    },
    test4:{
        width:50,
        height:50,
        backgroundColor:'#9e893b',
    },
})