import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FriendMindPage from "../found/friendMindPage";

const Tab = createMaterialTopTabNavigator();

import DefaultPage from "./defaultPage";
import UpdatePage from "./updatePage";
import ProgressPage from "./progressPage";
import RecommendPage from "./recommendPage";
import ClassifyPage from "./classifyPage";
import PayPage from "./payPage";

import MyBookListPage from "./myBookListPage";
import CollectBookListPage from "./collectBookListPage";
function BookShelfTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16 },
                tabBarStyle: { backgroundColor: '#f1f3f5' },
                tabBarItemStyle: {width:'auto', },
                swipeEnabled: true, // 是否可以左右滑动切换tab
                tabBarIndicatorStyle:{height:3,width:0.3, backgroundColor:"#0000ff50"}, //设置item下方的下划线高度跟颜色
                tabBarActiveTintColor:"#0000ff80",
                tabBarInactiveTintColor:"#00000085",
            }}
        >
            <Tab.Screen name='book_default' options={{title:'默认'}} component={DefaultPage}></Tab.Screen>
            <Tab.Screen name='book_update' options={{title:'更新'}} component={UpdatePage}></Tab.Screen>
            <Tab.Screen name='book_progress' options={{title:'进度'}} component={ProgressPage}></Tab.Screen>
            <Tab.Screen name='book_recommend' options={{title:'推荐值'}} component={RecommendPage}></Tab.Screen>
            <Tab.Screen name='book_classify' options={{title:'分类'}} component={ClassifyPage}></Tab.Screen>
            <Tab.Screen name='book_pay' options={{title:'付费'}} component={PayPage}></Tab.Screen>
        </Tab.Navigator>
    );
};

function BookListTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16 },
                tabBarStyle: { backgroundColor: '#f1f3f5' },
                tabBarItemStyle: {width:'auto', },
                swipeEnabled: true, // 是否可以左右滑动切换tab
                tabBarIndicatorStyle:{height:0, width:0.3, backgroundColor:"#0000ff50"}, //设置item下方的下划线高度跟颜色
                tabBarActiveTintColor:"#0000ff80",
                tabBarInactiveTintColor:"#00000085",
            }}
        >
            <Tab.Screen name='book_shelf' options={{title:'我的书单'}} component={MyBookListPage}></Tab.Screen>
            <Tab.Screen name='book_list' options={{title:'收藏的书单'}} component={CollectBookListPage}></Tab.Screen>
        </Tab.Navigator>
    );
};

let NavBarHeight = 0;
if (Platform.OS === "ios"){
    NavBarHeight = 80
}else if (Platform.OS === "android"){
    NavBarHeight = 50
}

class BookshelfPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            btn_type:0,
        }
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={{width:width.valueOf(), height:100, display:"flex"}}>
                    <View style={{flex: 1.5}}/>
                    <View style={{flex:3.5, display:"flex", alignItems:'center', justifyContent:'center'}}>
                        <View
                            style={{width:width - 40, height:40, borderRadius:20, backgroundColor:"#00000010", display:"flex", flexDirection:"row"}}
                        >
                            <View style={{flex:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <Image
                                    source={require("../../assets/icons/search.png")}
                                    style={{width: 30, height: 30}}
                                />
                            </View>
                            <View style={{flex:6, display:"flex",}}>
                                <TextInput
                                    style={{flex:1}}
                                    //textAlign={"center"}
                                    textAlignVertical={"center"}
                                    ref="inputSearch"
                                    placeholder="请输入搜索内容"
                                    placeholderTextColor='#00000030'
                                    //onFocus={this._searchFocus}
                                >
                                </TextInput>
                            </View>
                            <View style={{flex:2, display:"flex"}}>
                                <TouchableOpacity
                                    onPress={this.onClickBookAdd}
                                    style={{flex:1, alignItems:"flex-end", justifyContent:"center", marginRight:15}}
                                >
                                    <Image source={require("../../assets/icons/add.png")} style={{width:20, height:20}}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{width:width, height:50, borderBottomWidth:1, borderColor:"#00000010", display:"flex"}}>
                    {this._renderButton()}
                </View>
                <View style={{width:width, height:height - 150 - NavBarHeight, backgroundColor: "#f00"}}>
                    {this._renderTab()}
                </View>
            </View>
        );
    }

    _renderTab  = () =>{
        if (this.state.btn_type === 0){
            return (
                <BookShelfTabs/>
            );
        }else {
            return (
                <BookListTabs/>
            );
        }
    }
    _renderButton = () =>{
        if (this.state.btn_type === 0){
            return (
                <View style={{flex:1, flexDirection:"row", display:"flex"}}>
                    <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity
                            onPress={this.onClickBookShelf}
                            style={{marginLeft:15}}
                        >
                            <Text style={{fontSize: 16, color:"#0000ff80", fontWeight:"bold"}}>书城</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onClickBookList}
                            style={{marginLeft:15}}
                        >
                            <Text  style={{fontSize: 16, color:"#00000085"}}>书单</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
            );
        }else {
            return (
                <View style={{flex:1, flexDirection:"row", display:"flex"}}>
                    <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity
                            onPress={this.onClickBookShelf}
                            style={{marginLeft:15}}
                        >
                            <Text style={{fontSize: 16, color:"#00000085"}}>书城</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onClickBookList}
                            style={{marginLeft:15}}
                        >
                            <Text  style={{fontSize: 16, color:"#0000ff85", fontWeight:"bold"}}>书单</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
            );
        }
    }

    onClickBookAdd = () =>{
        alert("add");
    }
    onClickBookShelf = () =>{
        this.setState({btn_type:0})
    }

    onClickBookList = () =>{
        this.setState({btn_type:1})
    }
}

export default BookshelfPage;


const styles = StyleSheet.create({
    body:{
        width:width,
        height:height,
        backgroundColor:"#f1f3f5"
    }
})
