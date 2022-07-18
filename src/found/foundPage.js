import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Platform,
    TouchableOpacity,
    Image,
    ImageBackground,
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

let NavBarHeight = 0;
if (Platform.OS === "ios"){
    NavBarHeight = 80
}else if (Platform.OS === "android"){
    NavBarHeight = 50
}

class FoundPage extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={{width:width, height:100, display:"flex"}}>
                    <View style={{flex:2}}>{/*占位*/}</View>
                    <View style={{flex:3, flexDirection:"row", display:"flex", borderBottomWidth:1, borderColor:"#00000010"}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
                            <Text style={{fontSize:18, fontWeight:"bold"}}>发现</Text>
                        </View>
                        <View style={{flex:1}}></View>
                    </View>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{marginBottom:NavBarHeight}}
                >
                    <View style={{width:width -  20, height:70,  marginLeft:10, borderRadius:10, backgroundColor: "#fff", marginTop:20, display:"flex"}}>
                        <TouchableOpacity
                            onPress={this.onClickFriendMind}
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/xiangfa.png")} style={{width:24, height:24}}></Image>
                            </View>
                            <View style={{flex:7, justifyContent:"center"}}>
                                <Text style={{fontSize:18, fontWeight:"bold"}}>朋友的想法</Text>
                            </View>
                            <View style={{flex:1.5}}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width -  20, height:70,  marginLeft:10, borderRadius:10, backgroundColor: "#fff", marginTop:20, display:"flex"}}>
                        <TouchableOpacity
                            onPress={this.onClickCircle}
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/quanzi.png")} style={{width:24, height:24}}></Image>
                            </View>
                            <View style={{flex:7, justifyContent:"center"}}>
                                <Text style={{fontSize:18, fontWeight:"bold"}}>小圈子</Text>
                            </View>
                            <View style={{flex:1.5}}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width -  20, height:70,  marginLeft:10, borderRadius:10, backgroundColor: "#fff", marginTop:20, display:"flex"}}>
                        <TouchableOpacity
                            onPress={this.onClickVip}
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/fufei.png")} style={{width:24, height:24}}></Image>
                            </View>
                            <View style={{flex:4, justifyContent:"center"}}>
                                <Text style={{fontSize:18, fontWeight:"bold"}}>付费会员专享</Text>
                            </View>
                            <View style={{flex:4.5, justifyContent:"center", alignItems:"flex-end", marginRight:15}}>
                                <Text style={{fontSize:14, color:"#00000065"}}>7月新增133本</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width -  20, height:70,  marginLeft:10, borderRadius:10, backgroundColor: "#fff", marginTop:20, display:"flex"}}>
                        <TouchableOpacity
                            onPress={this.onClickFreeGetBook}
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/mianfei.png")} style={{width:24, height:24}}></Image>
                            </View>
                            <View style={{flex:4, justifyContent:"center"}}>
                                <Text style={{fontSize:18, fontWeight:"bold"}}>免费领书</Text>
                            </View>
                            <View style={{flex:4.5, justifyContent:"center", alignItems:"flex-end", marginRight:15}}>
                                <Text style={{fontSize:14, color:"#00000065"}}>《你是我的学生又怎样》</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width -  20, height:70,  marginLeft:10, borderRadius:10, backgroundColor: "#fff", marginTop:20, display:"flex"}}>
                        <TouchableOpacity
                            onPress={this.onClickWellBeing}
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/fuli.png")} style={{width:24, height:24}}></Image>
                            </View>
                            <View style={{flex:4, justifyContent:"center"}}>
                                <Text style={{fontSize:18, fontWeight:"bold"}}>福利场</Text>
                            </View>
                            <View style={{flex:4.5, justifyContent:"center", alignItems:"flex-end", marginRight:15}}>
                                <Text style={{fontSize:14, color:"#00000065"}}>答题瓜分百万书币体验卡</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:width -  20, height:280,  marginLeft:10, borderRadius:10, backgroundColor: "#fff", marginTop:20, display:"flex"}}>
                        <View style={{flex:1, margin:5, display:"flex"}}>
                            <View style={{flex:1, flexDirection:"row", display:"flex"}}>
                                <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                    <Image source={require("../../assets/icons/tingshu.png")} style={{width:24, height:24}}></Image>
                                </View>
                                <View style={{flex:8.5, justifyContent:"center"}}>
                                    <Text style={{fontSize:18, fontWeight:"bold"}}>微信听书 · 为你推荐</Text>
                                </View>
                            </View>
                            <View style={{flex:3, flexDirection:"row"}}>
                                <View style={{flex:1, display:"flex", margin:10}}>
                                    <View style={{flex:7}}>
                                        <ImageBackground
                                            style={{flex:1, display:"flex"}}
                                            source={require("../../assets/WechatIMG280.jpeg")}
                                        >
                                            <View style={{flex:4.5}}></View>
                                            <View style={{flex:1.5, backgroundColor: "#ff0000", borderBottomLeftRadius:10, borderBottomRightRadius:10, alignItems:"center", justifyContent:"center"}}>
                                                <Text
                                                    ellipsizeMode={"tail"}
                                                    numberOfLines={1}
                                                    style={{fontSize:12, textAlign:"center", color:"#fff"}}
                                                >41.5w 人收听</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                    <View style={{flex:3, alignItems:"center", justifyContent:"center"}}>
                                        <Text
                                            ellipsizeMode={"tail"}
                                            numberOfLines={2}
                                            style={{fontSize:14, textAlign:"center"}}
                                        >赛格克莱</Text>
                                    </View>
                                </View>
                                <View style={{flex:1, display:"flex", margin:10}}>
                                    <View style={{flex:7}}>
                                        <ImageBackground
                                            style={{flex:1, display:"flex"}}
                                            source={require("../../assets/WechatIMG280.jpeg")}
                                        >
                                            <View style={{flex:4.5}}></View>
                                            <View style={{flex:1.5, backgroundColor: "#ff0000", borderBottomLeftRadius:10, borderBottomRightRadius:10, alignItems:"center", justifyContent:"center"}}>
                                                <Text
                                                    ellipsizeMode={"tail"}
                                                    numberOfLines={1}
                                                    style={{fontSize:12, textAlign:"center", color:"#fff"}}
                                                >悬疑灵异 No.4</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                    <View style={{flex:3, alignItems:"center", justifyContent:"center"}}>
                                        <Text
                                            ellipsizeMode={"tail"}
                                            numberOfLines={2}
                                            style={{fontSize:14, textAlign:"center"}}
                                        >世界史坐标里的中国阿巴阿巴阿巴</Text>
                                    </View>
                                </View>
                                <View style={{flex:1, display:"flex", margin:10}}>
                                    <View style={{flex:7}}>
                                        <ImageBackground
                                            style={{flex:1, display:"flex"}}
                                            source={require("../../assets/WechatIMG280.jpeg")}
                                        >
                                            <View style={{flex:4.5}}></View>
                                            <View style={{flex:1.5, backgroundColor: "#ff0000", borderBottomLeftRadius:10, borderBottomRightRadius:10, alignItems:"center", justifyContent:"center"}}>
                                                <Text
                                                    ellipsizeMode={"tail"}
                                                    numberOfLines={1}
                                                    style={{fontSize:12, textAlign:"center", color:"#fff"}}
                                                >1556 人收听</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                    <View style={{flex:3, alignItems:"center", justifyContent:"center"}}>
                                        <Text
                                            ellipsizeMode={"tail"}
                                            numberOfLines={2}
                                            style={{fontSize:14, textAlign:"center"}}
                                        >上错花轿嫁对郎</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                <TouchableOpacity
                                    onPress={this.onClickExChange}
                                    style={{width:width  - 100, height:50, backgroundColor:"#f5f7f6",  borderRadius:10,  alignItems:"center", justifyContent:"center"}}
                                >
                                    <Text style={{fontSize:18, color:"rgba(0,0,0,0.85)"}}>换一批</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    onClickFriendMind  = () =>{
        alert("朋友的想法")
    }

    onClickCircle = () =>{
        alert("小圈子 ")
    }

    onClickVip  = () =>{
        alert("付费会员专享")
    }

    onClickFreeGetBook  = () =>{
        alert("免费领书")
    }

    onClickWellBeing  = () =>{
        alert("福利场")
    }

    onClickExChange  = () =>{
        alert("换一批")
    }
}

export default FoundPage;

const styles = StyleSheet.create({
    body:{
        width:width,
        height:height,
        backgroundColor:"#f1f3f5"
    }
})
