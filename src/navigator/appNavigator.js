import React, {Component} from 'react';
import {Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

//import child pages
import ReadPage from "../read/readPage";
import BookshelfPage from "../bookshelf/bookshelfPage";
import FoundPage from "../found/foundPage";
import MinePage from "../mine/minePage";

class AppNavigator extends Component {
    render() {
        return (
            <BottomTabBar/>
        );
    }
}

function BottomTabBar(){
    return(
        <BottomTab.Navigator
            //set options
            screenOptions={({route}) =>({
                tabBarIcon:({focused, size, color}) =>{
                    let  icon;
                    if (route.name === "read"){
                        //TODO:阅读
                        icon = focused ?
                            (//selected
                                <Image
                                    source={require("../../assets/tabicons/read-selected.png")}
                                    style={{width:25, height:25}}
                                ></Image>
                            ) : (//normal
                                <Image
                                    source={require("../../assets/tabicons/read-normal.png")}
                                    style={{width:25, height:25}}
                                ></Image>
                            )
                    }else  if (route.name  ===  "bookshelf"){
                        //TODO:书架
                        icon = focused ?
                            (//selected
                                <Image
                                    source={require("../../assets/tabicons/bookshelf-selected.png")}
                                    style={{width:25, height:25}}
                                ></Image>
                            ) : (//normal
                                <Image
                                    source={require("../../assets/tabicons/bookshelf-normal.png")}
                                    style={{width:25, height:25}}
                                ></Image>
                            )
                    }else  if (route.name === "found"){
                        //TODO:发现
                        icon = focused ?
                            (//selected
                                <Image
                                    source={require("../../assets/tabicons/found-selected.png")}
                                    style={{width:25, height:25}}
                                ></Image>
                            ) : (//normal
                                <Image
                                    source={require("../../assets/tabicons/found-normal.png")}
                                    style={{width:25, height:25}}
                                ></Image>
                            )
                    }else if (route.name  === "mine"){
                        //TODO:我的
                        icon = focused ?
                            (//selected
                                <Image
                                    source={require("../../assets/tabicons/mine-selected.png")}
                                    style={{width:25, height:25}}
                                ></Image>
                            ) : (//normal
                                <Image
                                    source={require("../../assets/tabicons/mine-normal.png")}
                                    style={{width:25, height:25}}
                                ></Image>
                            )
                    }
                    return icon;
                },
                headerStyle:{
                    //backgroundColor: "#f00",
                    height: 0,
                },
                activeTintColor:"#333333",
                inactiveTintColor:"#00000050",
                showLabel: true,
                tabBarStyle:{}
            })}
        >
            {/* add pages*/}
            {/* options={{ tabBarBadge: 100 }} */}
            <BottomTab.Screen name="read" options={{title:'阅读'}} component={ReadPage} />
            <BottomTab.Screen name="bookshelf" options={{title:'书架'}} component={BookshelfPage}/>
            <BottomTab.Screen name="found" options={{title:'发现'}} component={FoundPage}/>
            <BottomTab.Screen name="mine" options={{title:'我的'}} component={MinePage}/>
        </BottomTab.Navigator>
    );
}

export default AppNavigator;

