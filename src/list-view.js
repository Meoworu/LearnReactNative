import React, {Component} from 'react';
import {View, Text, ListView, StyleSheet, RefreshControl, ActivityIndicator} from 'react-native';


export default class ListViewEle extends Component{
    constructor(props){
        super(props);
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            refer:false
        }
    }
    getContent(){
        return new Promise((success, error)=>{
            let arr = require('./components/person.json')||[];
            setTimeout(()=>{
                if(arr!=[]){
                    success(arr);
                }else{
                    error('加载失败！');
                }
            },1000)
        })
    }
    // componentWillMount(){
    //     this.setState(()=>{
    //         return {
    //             dataSource:this.state.ds.cloneWithRows([{name:'刘亦菲'},{name:'赵丽颖'}])
    //             // dataSource:data
    //         }
    //     })
    // }

    _renderRow(item, sectionId, rowId){
        return (
            <View style={styles.box}>
                <Text style={styles.min}>{item.name+'+'+sectionId+'+'+rowId}</Text>
            </View>
        )
    }
    async componentDidMount(){
        let data = await this.getContent();
        this.setState(()=>{
            return {
                dataSource:this.state.ds.cloneWithRows(data),
                refer:false
            }
        })
    }
    async _refersh(){
        this.setState({refer:true});
        let data = await this.getContent();
        this.setState(()=>{
            return {
                dataSource:this.state.ds.cloneWithRows(data),
                refer:false
            }
        })
    }
    _endReached(){
        console.log(111111);
    }
    render(){
        
        if(this.state.dataSource){
            return(
                <ListView style={{marginTop:20}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    refreshControl={<RefreshControl
                        onRefresh={this._refersh.bind(this)}
                        refreshing={this.state.refer}/>}
                    onEndReached={this._endReached.bind(this)}
                    onEndReachedThreshode={0.3}>
                </ListView>  
            )    
        }else{
            return(
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            )
        }
            
        
    }
}

let styles = StyleSheet.create({
    box:{
        height:50,
        flex: 1,
        backgroundColor:'grey',
        borderColor:'#000',
        borderBottomWidth:1,
        
    },
    min:{
        flex:1,
        lineHeight:50,
        textAlign:'center',
    },
    loading:{
        flex:1,
        backgroundColor:'grey',
        justifyContent: 'center',
        alignContent: 'center',
    }
})