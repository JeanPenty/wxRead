import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Platform,
} from "react-native";


let NavBarHeight = 0;
if (Platform.OS === "ios"){
    NavBarHeight = 80
}else if (Platform.OS === "android"){
    NavBarHeight = 50
}

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

class MinePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mailCount:1,

            tykDay:87,
            readSort:1,

            followMe:10,
            meFollow:1,
            noteCount:8,

            readFinish:4,
            readingCount:41,

            name:"0xFFFFFFFF",
        }
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={{width:width, height:80, display:"flex", borderBottomWidth:1, borderColor:"#00000010"}}>
                    <View style={{flex:2}}>{/*占位*/}</View>
                    <View style={{flex:3, flexDirection:"row", display:"flex"}}>
                        <TouchableOpacity
                            onPress={this.onClickNotice}
                            style={{flex:1, display:"flex", alignItems:"center", justifyContent:"flex-start", flexDirection:"row"}}>
                            <Image source={require("../../assets/icons/mail.png")} style={{width:30, height:20, marginLeft:15}}></Image>
                            <Text style={{marginLeft:5}}>{(this.state.mailCount)}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onClickSetting}
                            style={{flex:1, display:"flex", justifyContent:"center", alignItems:"flex-end"}}>
                            <Image source={require("../../assets/icons/setting.png")} style={{width:30, height:30, marginRight:15}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{marginBottom:NavBarHeight}}
                >
                    <View style={{width:width - 30, height:100, display:"flex", marginLeft:15, flexDirection:"row"}}>
                        <View style={{flex:2, justifyContent:"center"}}>
                            <Image source={require("../../assets/default_portrait.png")}
                                   style={{width:50, height:50, borderRadius:25, marginLeft:15}}></Image>
                        </View>
                        <View style={{flex:7, display:"flex"}}>
                            <View style={{flex:2, justifyContent:"center"}}>
                                <Text style={{fontSize:24, fontWeight:"bold"}}>{(this.state.name)}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={this.onClickEditor}
                                style={{flex:1}}>
                                <Text style={{color:"#00000045"}}>编辑个人资料</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={this.onClickMain}
                            style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"flex-end", marginLeft:15}}>
                            <Text style={{color:"#00000085"}}>主页</Text>
                            <Image source={require("../../assets/icons/arrow-right.png")} style={{width:12, height:24, marginLeft:5}}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:width - 30, height:160, backgroundColor: "#fff", display:"flex", borderRadius:10, marginTop:20, marginLeft:15}}>
                        <TouchableOpacity
                            onPress={this.onClickAccount}
                            style={{flex:1, display:"flex", flexDirection:"row", borderBottomWidth:1, borderColor:"#00000010"}}>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                                <Image source={require("../../assets/mine/acc.png")}  style={{width:24, height:24, marginLeft:15}}></Image>
                                <Text style={{fontSize:16, fontWeight:"bold", marginLeft:10}}>账户</Text>
                            </View>
                            <View style={{flex:1, display:"flex"}}>
                                <View style={{flex:1, justifyContent:"flex-end", alignItems:"flex-end", flexDirection:"row"}}>
                                    <Text style={{marginRight:5, color:"#00000045"}}>余额</Text>
                                    <Text style={{marginRight:15, color:"#00000085", fontSize:16}}>23.00</Text>
                                </View>
                                <View style={{flex:1, justifyContent:"center", alignItems:"flex-end"}}>
                                    <Text style={{marginRight:15, color:"#00000045"}}>充值币 0.00 &  赠币23.00</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onClickVip}
                            style={{flex:1, display:"flex", flexDirection:"row"}}>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                                <Image source={require("../../assets/icons/fufei.png")}  style={{width:24, height:24, marginLeft:15}}></Image>
                                <Text style={{fontSize:16, fontWeight:"bold", marginLeft:10}}>付费会员卡</Text>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flex:1, justifyContent:"flex-end", alignItems:"flex-end", flexDirection:"row"}}>
                                    <Text style={{marginRight:15, color:"#00000085", fontSize:16}}>连续包月</Text>
                                </View>
                                <View style={{flex:1, justifyContent:"center", alignItems:"flex-end"}}>
                                    <Text style={{marginRight:15, color:"#00000045"}}>免费体验卡 {(this.state.tykDay)} 天</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width - 30, height:160, backgroundColor: "#fff", display:"flex", marginTop:20, marginLeft:15, borderRadius:10}}>
                        <TouchableOpacity
                            onPress={this.onClickReadSort}
                            style={{flex:1, display:"flex", flexDirection:"row", borderBottomWidth:1, borderColor:"#00000010"}}>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                                <Image source={require("../../assets/mine/sortlist.png")}  style={{width:24, height:24, marginLeft:15}}></Image>
                                <Text style={{fontSize:16, fontWeight:"bold", marginLeft:10}}>读书排行榜</Text>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flex:1, justifyContent:"flex-end", alignItems:"flex-end", flexDirection:"row"}}>
                                    <Text style={{color:"#00000045"}}>第 </Text>
                                    <Text style={{color:"#00000085", fontSize:16}}>{(this.state.readSort)}</Text>
                                    <Text style={{marginRight:15, color:"#00000045"}}> 名</Text>
                                </View>
                                <View style={{flex:1, justifyContent:"center", alignItems:"flex-end"}}>
                                    <Text style={{marginRight:15, color:"#00000045"}}>15分钟 可兑2天体验卡</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onClickFollow}
                            style={{flex:1, display:"flex", flexDirection:"row"}}>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                                <Image source={require("../../assets/mine/follow.png")}  style={{width:24, height:24, marginLeft:15}}></Image>
                                <Text style={{fontSize:16, fontWeight:"bold", marginLeft:10}}>关注</Text>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flex:1, justifyContent:"flex-end", alignItems:"flex-end", flexDirection:"row"}}>
                                    <Text style={{marginRight:5, color:"#00000085", fontSize:16}}>{(this.state.followMe)}</Text>
                                    <Text style={{marginRight:15, color:"#00000045"}}>人关注我</Text>
                                </View>
                                <View style={{flex:1, justifyContent:"center", alignItems:"flex-end"}}>
                                    <Text style={{marginRight:15, color:"#00000045"}}>已关注{(this.state.meFollow)}人</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width - 30, height:240, backgroundColor: "#fff", display:"flex", borderRadius:10, marginTop:20, marginLeft:15}}>
                        <TouchableOpacity
                            onPress={this.onClickMedal}
                            style={{flex:1, display:"flex", flexDirection:"row", borderBottomWidth:1, borderColor:"#00000010"}}>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                                <Image source={require("../../assets/mine/xunzhang.png")}  style={{width:24, height:24, marginLeft:15}}></Image>
                                <Text style={{fontSize:16, fontWeight:"bold", marginLeft:10}}>勋章</Text>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flex:1, justifyContent:"flex-end", alignItems:"flex-end", flexDirection:"row"}}>
                                    {/*绘制勋章类型*/}
                                    <Text style={{marginRight:15}}>绘制勋章类型</Text>
                                </View>
                                <View style={{flex:1, justifyContent:"center", alignItems:"flex-end"}}>
                                    <Text style={{marginRight:15, color:"#00000045"}}>2 枚勋章待领取</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onClickNote}
                            style={{flex:1, display:"flex", flexDirection:"row", borderBottomWidth:1, borderColor:"#00000010"}}>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                                <Image source={require("../../assets/mine/note.png")}  style={{width:24, height:24, marginLeft:15}}></Image>
                                <Text style={{fontSize:16, fontWeight:"bold", marginLeft:10}}>笔记</Text>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flex:1, justifyContent:"flex-end", alignItems:"center", flexDirection:"row"}}>
                                    <Text style={{marginRight:5, color:"#00000085", fontSize:16}}>{(this.state.noteCount)}</Text>
                                    <Text style={{marginRight:15, color:"#00000085"}}>个笔记</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onClickReadRecord}
                            style={{flex:1, display:"flex", flexDirection:"row"}}>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                                <Image source={require("../../assets/mine/jilu.png")}  style={{width:24, height:24, marginLeft:15}}></Image>
                                <Text style={{fontSize:16, fontWeight:"bold", marginLeft:10}}>阅读记录和订阅</Text>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{flex:1, justifyContent:"flex-end", alignItems:"flex-end", flexDirection:"row"}}>
                                    <Text style={{marginRight:5, color:"#00000085", fontSize:16}}>{(this.state.readFinish)}</Text>
                                    <Text style={{marginRight:15, color:"#00000045"}}>本已读完</Text>
                                </View>
                                <View style={{flex:1, justifyContent:"flex-end", alignItems:"center", flexDirection:"row"}}>
                                    <Text style={{marginRight:5, color:"#00000085", fontSize:16}}>{(this.state.readingCount)}</Text>
                                    <Text style={{marginRight:15, color:"#00000045"}}>本在读</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }

    onClickEditor = () =>{
        //
    }
    onClickNotice = () =>{
        //
        this.props.navigation.navigate("mine_notice")
    }
    onClickSetting = () =>{
        //
        this.props.navigation.navigate("mine_setting")
    }
    onClickMain = () =>{
        //
        this.props.navigation.navigate("mine_main")
    }
    onClickAccount = () =>{
        //
        this.props.navigation.navigate("mine_account")
    }
    onClickVip = () =>{
        //
        this.props.navigation.navigate("mine_vip")
    }
    onClickReadSort = () =>{
        //
        this.props.navigation.navigate("mine_read_sort")
    }
    onClickFollow = () =>{
        //
        this.props.navigation.navigate("mine_follow")
    }
    onClickMedal = () =>{
        //
        this.props.navigation.navigate("mine_medal")
    }
    onClickNote = () =>{
        //
        this.props.navigation.navigate("mine_note")
    }
    onClickReadRecord = ()  =>{
        //
        this.props.navigation.navigate("mine_read_record")
    }
}

export default MinePage;

const styles = StyleSheet.create({
    body:{
        width:width,
        height:height,
        backgroundColor:"#f1f3f5"
    }
})
