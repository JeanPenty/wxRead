import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    FlatList,
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

import CardView from 'react-native-cardview-wayne';
import {LinearGradient} from "expo-linear-gradient"

import {Card} from 'react-native-shadow-cards'

let NavBarHeight = 0;
if (Platform.OS === "ios"){
    NavBarHeight = 80
}else if (Platform.OS === "android"){
    NavBarHeight = 50
}

const List = require('./testJson.json');

class ReadPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //TODO:
            week_day:3,
            week_min:16,
            day:2,

            btnDate:["分类","榜单","书单","会员","免费", "新书","听书"],
            bookDate:[1,2,3,4,5,6,7,8],

            data:List.data,
        }
    }

    renderBtn(index, value){
        return (
            <Card
                elevation={1}
                cornerRadius={17}
                opacity={0.2}
                style={{width:80,
                    height:35,
                    backgroundColor: "#fff",
                    alignItems:"center",
                    justifyContent:"center",
                    marginLeft:15,
                    display:"flex",
            }}>
                <TouchableOpacity
                    onPress={this.btnClick.bind(this, index, value)}
                    style={{flexDirection:"row", flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:14,}}>{(value)}</Text>
                    <Image source={require("../../assets/icons/arrow-right.png")} style={{width:10, height:15, marginLeft:1}}></Image>
                </TouchableOpacity>
            </Card>
        );
    }

    renderBookCard(index, item){
        return (
            <Card
                elevation={4}
                cornerRadius={10}
                opacity={0.2}
                style={{width:80,
                    height:110,
                    backgroundColor: "#fff",
                    alignItems:"center",
                    justifyContent:"center",
                    marginLeft:15,
                    display:"flex",
                }}>
                <ImageBackground
                    source={require("../../assets/WechatIMG278.jpeg")}
                    style={{flex:1,width:80, height:110, borderRadius:10}}></ImageBackground>
            </Card>
        );
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={{width:width, height:100, display:"flex"}}>
                    <View style={{flex:1.5}}></View>
                    <View style={{flex:3.5, display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <View
                            style={{width:width - 40, height:40, borderRadius:20, backgroundColor:"#00000010", display:"flex", flexDirection:"row"}}
                        >
                            <View style={{flex:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <Image
                                    source={require("../../assets/icons/search.png")}
                                    style={{width:30, height:30}}></Image>
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
                                    onPress={this.onClickBookShelf}
                                    style={{flex:1, alignItems:"center", justifyContent:"center"}}
                                >
                                    <Text>书城</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <FlatList
                    style={{marginBottom:NavBarHeight}}
                    data={this.state.data}
                    ListHeaderComponent={this._renderListHeader}
                    renderItem={this._renderItem}
                    ListEmptyComponent={this._renderListEmpty}
                ></FlatList>
            </View>
        );
    }

    _renderListHeader = () =>{
        const days = "领取" + this.state.day + "天体验卡"

        return (
            <View>
                <View
                    style={{ width:width, height:35, display:"flex"}}
                >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <Card
                            elevation={3}
                            cornerRadius={17}
                            opacity={0.2}
                            style={{width:120, height:35, display:"flex", marginLeft:20}}
                        >
                            <TouchableOpacity
                                style={{flexDirection:"row", flex:1, alignItems:"center", justifyContent:"center"}}>
                                <Text style={{fontSize:14, color:"#df846e", }}>暑期年卡特惠</Text>
                                <Image source={require("../../assets/icons/arrow-right.png")} style={{width:10, height:15, marginLeft:1}}></Image>
                            </TouchableOpacity>
                        </Card>
                        {this.state.btnDate.map((value, index) => this.renderBtn(index, value))}
                    </ScrollView>
                </View>
                <View
                    style={{ width:width, height:120, display:"flex", marginTop:15}}
                >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <Card
                            elevation={4}
                            cornerRadius={10}
                            opacity={0.2}
                            style={{width:120,
                                height:110,
                                backgroundColor: "#fff",
                                alignItems:"center",
                                justifyContent:"center",
                                marginLeft:20,
                                display:"flex",
                            }}>
                            <TouchableOpacity
                                onPress={()=>{alert("111")}}
                                style={{width:120, height:110, display:"flex"}}>
                                <View style={{flex:3, borderTopLeftRadius:10, borderTopRightRadius:10, flexDirection:"row", alignItems:"center"}}>
                                    <Image source={require("../../assets/icons/last.png")} style={{width:15, height:15, marginLeft:5}}></Image>
                                    <Text style={{fontSize:12, marginLeft:2, color:"#daa351"}}>本周阅读 </Text>
                                    <Text style={{fontSize:14, color:"#ff000090"}}>{(this.state.week_day)}</Text>
                                    <Text style={{fontSize:12, color:"#daa351"}}> 天</Text>
                                </View>
                                <View style={{flex:4, flexDirection:"row", alignItems:"center"}}>
                                    <Text style={{fontSize:24, color:"#ff000090", marginLeft:5}}>{(this.state.week_min)}</Text>
                                    <Text style={{fontSize:12, color:"#daa351", marginLeft:2, marginTop:5}}>分钟</Text>
                                </View>
                                <LinearGradient colors={['#e0ce8b', '#f9e0bd']} style={{flex:3, borderBottomLeftRadius:10, borderBottomRightRadius:10, alignItems:"center", justifyContent:"center"}}>
                                    <Text style={{fontSize:13, color:"#5a3d1a"}}>{(days)}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </Card>
                        {this.state.bookDate.map((value, index) => this.renderBookCard(index, value))}
                    </ScrollView>
                </View>
            </View>
        );
    }

    _renderListEmpty = () =>{
        return (
            <View style={{alignItems:"center", justifyContent:"center", height:200}}>
                <Text>列表为空</Text>
            </View>
        );
    }
    _renderItem = ({item, index}) => {
        if (item.card_type === 0){//推荐书籍

            let text;
            if (item.friend_status === 0){
                //在读
                text = item.friend_count + "位朋友在读"
            }else {
                //读完
                text = item.friend_count + "位朋友读完"
            }

            let todayRead = item.today_read + "人今日在读";
            let putValue = "推荐值" + item.put_value;
            return (
                <Card
                    elevation={5}
                    cornerRadius={10}
                    opacity={0.1}
                    style={{backgroundColor: "#fff",
                        marginLeft:20,
                        marginTop:15,
                        width:width - 40,
                        height:1.4*(width - 40),
                }}>
                    <View style={{flex:1, display:"flex"}}>
                        <View style={{flex:1, alignItems:"center",  justifyContent:"center"}}>
                            <Image source={require("../../assets/WechatIMG280.jpeg")} style={{width:150, height:200}}></Image>
                        </View>
                        <View style={{flex:1, display:"flex"}}>
                            <View style={{flex:4, display:"flex"}}>
                                <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
                                    <Text
                                        ellipsizeMode={"tail"}
                                        numberOfLines={2}
                                        style={{fontSize:18, fontWeight:"bold", marginLeft:20, marginRight:20, textAlign:"center"}}
                                    >{(item.book_name)}</Text>
                                </View>
                                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                    <Text
                                        ellipsizeMode={"tail"}
                                        numberOfLines={1}
                                        style={{fontSize:16, marginLeft:20, marginRight:20, textAlign:"center", color:"#00000065"}}
                                    >{(item.book_author)}</Text>
                                </View>
                                <View style={{flex:1, flexDirection:"row", display:"flex"}}>
                                    <View style={{flex:1, alignItems:"flex-end", justifyContent:"center"}}>
                                        <Text
                                            style={{fontSize:14, textAlign:"center", color:"#00000065", marginRight:5}}
                                        >{(todayRead)}</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:"flex-start", justifyContent:"center"}}>
                                        <Text
                                            style={{fontSize:14, textAlign:"center", color:"#00000065", marginLeft:5}}
                                        >{(putValue)}</Text>
                                    </View>
                                </View>
                                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                    {/*绘制图书徽章*/}
                                    <Text>此处绘制徽章</Text>
                                </View>
                            </View>
                            <View style={{flex:1, backgroundColor:"#00000020", borderBottomLeftRadius:10, borderBottomRightRadius:10, display:"flex"}}>
                                <TouchableOpacity
                                    style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"center"}}
                                >
                                    <Text style={{fontSize:14, color:"#8a8a8a"}}>{(text)}</Text>
                                    <Image source={require("../../assets/icons/arrow-right.png")} style={{width:10, height:15, marginLeft:1}}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Card>
            );
        }else if (item.card_type === 1){//体验卡活动
            return (
                <Card
                    elevation={5}
                    cornerRadius={10}
                    opacity={0.1}
                    style={{backgroundColor: "#fff",
                        marginLeft:20,
                        marginTop:15,
                        width:width - 40,
                        height:1.4*(width - 40),
                    }}>
                    <View style={{flex:1, display:"flex"}}>
                        <View style={{flex:1, alignItems:"center",  justifyContent:"center"}}>
                            <Image source={require("../../assets/WechatIMG280.jpeg")} style={{width:150, height:200}}></Image>
                        </View>
                        <View style={{flex:1, display:"flex"}}>
                            <View style={{flex:4}}></View>
                            <View style={{flex:1, backgroundColor:"#00000020", borderBottomLeftRadius:10, borderBottomRightRadius:10, display:"flex"}}>
                                <TouchableOpacity
                                    style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"center"}}
                                >

                                    <Image source={require("../../assets/icons/arrow-right.png")} style={{width:10, height:15, marginLeft:1}}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Card>
            );
        }else if (item.card_type === 2){//为你推荐
            //
        }else if (item.card_type === 3){//免费图书馆
            //
        }else if (item.card_type === 4){//今日书单
            //
        }
    }

    btnClick(index, value) {
        if (value === "分类"){
            //TODO:跳转至分类
            alert("分类")
        }else if (value === "榜单"){
            //TODO:跳转至分类
            alert("榜单")
        }else if (value === "书单"){
            //TODO:
            alert("书单")
        }else if (value === "会员"){
            //TODO:
            alert("会员")
        }else if (value === "免费"){
            //TODO:
            alert("免费")
        }else if (value === "新书"){
            //TODO:
            alert("新书")
        }else if (value === "听书"){
            //TODO:
            alert("听书")
        }
    }

    onClickBookShelf = () =>{
        //TODO:点击书城
    }
}

export default ReadPage;

const styles = StyleSheet.create({
    body:{
        width:width,
        height:height,
    }
})
