//推荐值
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground,
    Button,
    FlatList, TextInput, ScrollView
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

import {LinearGradient} from 'expo-linear-gradient';
import {Card} from 'react-native-shadow-cards';

const List = require("./testData/recommend.json")

class RecommendPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recommendData:List.data,
        }
    }


    renderRecommend(index, value){
        return (
            <Card
                elevation={2}
                cornerRadius={5}
                opacity={0.2}
                style={{width: width/3 - 25,
                    height:(width/3 - 30)*1.5,
                    display:"flex",
                    marginTop:20,
                    marginLeft:20,
                }}>
                <TouchableOpacity
                    //onPress={this.onClickCard.bind(this, item)}
                    style={{flex:1, display: "flex"}}>
                    <View style={{flex:7}}>
                        <ImageBackground
                            source={require("../../assets/classifyCover/wenxue.jpeg")}
                            style={{width:width/3 - 30, height:(width/3 - 25)*1.5*0.65,}}
                        ></ImageBackground>
                    </View>
                    <View style={{flex:3, display: "flex"}}>
                        {this._renderType(value)}
                    </View>
                </TouchableOpacity>
            </Card>
        );
    }

    _renderType = (value) =>{
        if (value.type === 0){
            return (
                <View style={{flex:1}}>
                    <View style={{flex:3, flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../../assets/icons/wheatleft_red.png")} style={{width:10, height:20}}></Image>
                        <Text style={{color:"#f00", marginLeft:5, marginRight:5}}>神作</Text>
                        <Image source={require("../../assets/icons/wheatright_red.png")} style={{width:10, height:20}}></Image>
                    </View>
                    <View style={{flex:2, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#00000065",fontSize:12}}>推荐值 ≥90%</Text>
                    </View>
                </View>
            );
        }else if (value.type === 1){
            return (
                <View style={{flex:1}}>
                    <View style={{flex:3, flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../../assets/icons/wheatleft_red.png")} style={{width:10, height:20}}></Image>
                        <Text style={{color:"#f00", marginLeft:5, marginRight:5}}>好评如潮</Text>
                        <Image source={require("../../assets/icons/wheatright_red.png")} style={{width:10, height:20}}></Image>
                    </View>
                    <View style={{flex:2, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#00000065",fontSize:12}}>推荐值 85-90%</Text>
                    </View>
                </View>
            );
        }else if (value.type === 2){
            return (
                <View style={{flex:1}}>
                    <View style={{flex:3, flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../../assets/icons/wheatleft_blue.png")} style={{width:10, height:20}}></Image>
                        <Text style={{color:"#00f", marginLeft:5, marginRight:5}}>脍炙人口</Text>
                        <Image source={require("../../assets/icons/wheatright_blue.png")} style={{width:10, height:20}}></Image>
                    </View>
                    <View style={{flex:2, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#00000065",fontSize:12}}>推荐值 80-85%</Text>
                    </View>
                </View>
            );
        }else if (value.type === 3){
            return (
                <View style={{flex:1}}>
                    <View style={{flex:3, flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../../assets/icons/wheatleft_blue.png")} style={{width:10, height:20}}></Image>
                        <Text style={{color:"#00f", marginLeft:5, marginRight:5}}>值得一读</Text>
                        <Image source={require("../../assets/icons/wheatright_blue.png")} style={{width:10, height:20}}></Image>
                    </View>
                    <View style={{flex:2, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#00000065",fontSize:12}}>推荐值 70-80%</Text>
                    </View>
                </View>
            );
        }else if (value.type === 4){
            return (
                <View style={{flex:1}}>
                    <View style={{flex:3, flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../../assets/icons/wheatleft_blue.png")} style={{width:10, height:20}}></Image>
                        <Text style={{color:"#00f", marginLeft:5, marginRight:5}}>褒贬不一</Text>
                        <Image source={require("../../assets/icons/wheatright_blue.png")} style={{width:10, height:20}}></Image>
                    </View>
                    <View style={{flex:2, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#00000065",fontSize:12}}>推荐值 60-70%</Text>
                    </View>
                </View>
            );
        }else if (value.type === 5){
            return (
                <View style={{flex:1}}>
                    <View style={{flex:3, flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../../assets/icons/wheatleft_gray.png")} style={{width:10, height:20}}></Image>
                        <Text style={{color:"#00000065", marginLeft:5, marginRight:5}}>不值一读</Text>
                        <Image source={require("../../assets/icons/wheatright_gray.png")} style={{width:10, height:20}}></Image>
                    </View>
                    <View style={{flex:2, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#00000065",fontSize:12}}>推荐值 40-60%</Text>
                    </View>
                </View>
            );
        }else if (value.type === 6){
            return (
                <View style={{flex:1}}>
                    <View style={{flex:3, flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../../assets/icons/wheatleft_gray.png")} style={{width:10, height:20}}></Image>
                        <Text style={{color:"#00000065", marginLeft:5, marginRight:5}}>烂书一本</Text>
                        <Image source={require("../../assets/icons/wheatright_gray.png")} style={{width:10, height:20}}></Image>
                    </View>
                    <View style={{flex:2, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#00000065",fontSize:12}}>推荐值 ≤40%</Text>
                    </View>
                </View>
            );
        }else if (value.type === 7){
            return (
                <View style={{flex:1}}>
                    <View style={{flex:2, flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#000", marginLeft:5, marginRight:5}}>评分不足</Text>
                    </View>
                    <View style={{flex:3, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color:"#00000065",fontSize:12}}>点评人数不足20人</Text>
                    </View>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.body}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        style={{flex:1,
                            flexDirection:"row",
                            display: "flex",
                            flexWrap:"wrap",
                            //justifyContent:"space-between",
                            marginBottom:300,
                        }}
                    >
                        {this.state.recommendData.map((value, index) => this.renderRecommend(index, value))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default RecommendPage;


const styles = StyleSheet.create({
    body: {
        width: width,
        height: height,
        backgroundColor:"#fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
})
