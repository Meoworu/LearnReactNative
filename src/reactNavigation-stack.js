import {createStackNavigator} from 'react-navigation';
import { Easing, Animated } from 'react-native';

import IndexEle from './page/index.js';
import Home from './page/home.js';
import Movie from './page/movie.js';

const Route = createStackNavigator(
    {
        Index:{ screen: IndexEle },
        Home:{ screen: Home },
        Movie: { screen: Movie },
    },
    {
        initialRouteName:'Index',//默认路由
        initialRouteParams:{name:'吴志祥'},//路由默认参数
        //mode:'modal',//路由切换时动画
        headerMode:'float',//导航头部渲染
        // transitionConfig: () => ({
        //     transitionSpec: {
        //       duration: 300,
        //       easing: Easing.out(Easing.poly(4)),
        //       timing: Animated.timing,
        //     },
        //     screenInterpolator: sceneProps => {
        //       const { layout, position, scene } = sceneProps;
        //       const { index } = scene;
      
        //       const height = layout.initHeight;
        //       const translateY = position.interpolate({
        //         inputRange: [index - 1, index, index + 1],
        //         outputRange: [height, 0, 0],
        //       });
      
        //       const opacity = position.interpolate({
        //         inputRange: [index - 1, index - 0.99, index],
        //         outputRange: [0, 1, 1],
        //       });
      
        //       return { opacity, transform: [{ translateY }] };
        //     },
        // }),

    }
)
export default Route;