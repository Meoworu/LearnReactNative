import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import Home from './page/home.js';
import Movie from './page/movie.js';
import Music from './page/music.js';
import Detail from './page/details.js';
import Icon from './components/Icon.js';

const tabHead = {
    Movie:'电影',
    Music:'音乐',
    Home: '我的',
}

const TabBar = createBottomTabNavigator(
    {
        Movie:{screen: Movie},
        Music:{screen: Music},
        Home:{screen: Home},
    },
    {
        tabBarOptions:{
            showIcon:true,
        },
        navigationOptions:(navigator)=>{
            let  {routeName}  = navigator.navigation.state;

            return {
                title:tabHead[routeName],
                // tabBarIcon(focused){
                //     let img;
                //     console.log(routeName);
                //     switch(routeName){
                //         case 'Movie':if(focused.focused){
                //             img = require('./image/movieActive.png');
                //         }else{
                //             img = require('./image/movie.png');
                //         };break;

                //         case 'Music':if(focused.focused){
                //             img = require('./image/musicAcitve.png');
                //         }else{
                //             img = require('./image/music.png');
                //         };break;

                //         case 'Home':if(focused.focused){
                //             img = require('./image/meActive.png');
                //         }else{
                //             img = require('./image/me.png');
                //         };break;
                //     }
                //     return <Icon img={img}/>
                // }
            }
        }
    }
)
const  StackBar = createStackNavigator({
    TabBar:{
        screen: TabBar,
        navigationOptions:{
            header:null
        }
    },
    Detail:{screen:Detail},
    
})

export default StackBar;