import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Platform,
    TouchableOpacity,
    Image,
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
                    <View style={{flex:3, flexDirection:"row", display:"flex"}}>
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
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/last.png")} style={{width:24, height:24}}></Image>
                            </View>
                            <View style={{flex:7, justifyContent:"center"}}>
                                <Text style={{fontSize:18, fontWeight:"bold"}}>朋友的想法</Text>
                            </View>
                            <View style={{flex:1.5}}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width -  20, height:70,  marginLeft:10, borderRadius:10, backgroundColor: "#fff", marginTop:20, display:"flex"}}>
                        <TouchableOpacity
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/last.png")} style={{width:24, height:24}}></Image>
                            </View>
                            <View style={{flex:7, justifyContent:"center"}}>
                                <Text style={{fontSize:18, fontWeight:"bold"}}>小圈子</Text>
                            </View>
                            <View style={{flex:1.5}}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width -  20, height:70,  marginLeft:10, borderRadius:10, backgroundColor: "#fff", marginTop:20, display:"flex"}}>
                        <TouchableOpacity
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/last.png")} style={{width:24, height:24}}></Image>
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
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/last.png")} style={{width:24, height:24}}></Image>
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
                            style={{flex:1, display:"flex",  flexDirection:"row", margin:5}}
                        >
                            <View style={{flex:1.5, justifyContent:"center", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/last.png")} style={{width:24, height:24}}></Image>
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
                                    <Image source={require("../../assets/icons/last.png")} style={{width:24, height:24}}></Image>
                                </View>
                                <View style={{flex:8.5, justifyContent:"center"}}>
                                    <Text style={{fontSize:18, fontWeight:"bold"}}>微信听书 · 为你推荐</Text>
                                </View>
                            </View>
                            <View style={{flex:3, alignItems:"center", justifyContent:"center"}}>
                                <Text>此处1*3绘制推荐书籍</Text>
                            </View>
                            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                <TouchableOpacity
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
}

export default FoundPage;

const styles = StyleSheet.create({
    body:{
        width:width,
        height:height,
        backgroundColor:"#f1f3f5"
    }
})
