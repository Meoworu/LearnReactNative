import React, {Component} from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native'
let screenWidth = Dimensions.get('window').width;
let imageAddress = {uri:'https://cdn.doumistatic.com/124,fa23b9b17a6dc2.jpeg'};
let imgaeUrl = require('../image/timg.jpeg');
export default class ImageEle extends Component{
    constructor(props){
        super(props);
        this.state = {
            width:200,
            height:200
        }
    }
    componentDidMount(){
         //let a = Image.getSize(imageAddress, (width,height)=>{//动态获取图片宽高
            
            //this.setState({width,height});
        //});
        
    }
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle}
                    resizeMode={'center'} 
                    source={imageAddress}/>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ccc',
    },
    imageStyle:{
       // flex:1
       width:200,
       height:200,
       backgroundColor:'#333',
    }
})
