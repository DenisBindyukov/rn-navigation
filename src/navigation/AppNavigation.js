import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {Platform} from "react-native";
import {THEME} from "../../THEME";


const PostNavigator = createStackNavigator({
    MyBlog: MainScreen,
    Post: {
        screen: PostScreen
    }
}, {
    initialRouteName: 'MyBlog',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
})

export const AppNavigation = createAppContainer(PostNavigator)