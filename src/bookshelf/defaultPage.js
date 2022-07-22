//默认
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

const List = require("./testData/books.json")

class DefaultPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booksData:List.data,
        }
    }

    renderBooks(index, item){
        return (
            <Card
                elevation={2}
                cornerRadius={5}
                opacity={0.2}
                style={{width: 110,
                    height:160,
                    display:"flex",
                    marginTop:20,
                }}>
                <TouchableOpacity
                    onPress={this.onClickCard.bind(this, item)}
                    style={{flex:1, display: "flex"}}>
                    <View style={{flex:4, display: "flex"}}>
                        <ImageBackground
                            source={require("../../assets/classifyCover/xuanhuan.jpeg")}
                            style={{width:110, height:130, display: "flex"}}
                        >
                            <View style={{flex:1, alignItems: "flex-end"}}>
                                {
                                    item.update
                                        ? <Text style={{color:"#fff", backgroundColor: "#f00", fontSize:12, marginLeft:5, marginBottom:5}}>更新</Text>
                                        : <Text></Text>
                                }
                            </View>
                            <View style={{flex:4}}></View>
                        </ImageBackground>
                    </View>
                    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                        <Text
                            ellipsizeMode={"tail"}
                            numberOfLines={1}
                            style={{fontSize:14, marginLeft:10, marginRight:10, textAlign:"center"}}
                        >{(item.name)}</Text>
                    </View>
                </TouchableOpacity>
            </Card>
        );
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
                            justifyContent:"space-between",
                            marginBottom:400,
                            marginLeft:10,
                            marginRight:10,
                        }}
                    >
                        {this.state.booksData.map((value, index) => this.renderBooks(index, value))}
                        <View style={{width:width, height:30, marginTop:30, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{color:"#00000065"}}>361本公开阅读 · 3本私密阅读</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    onClickCard(item){
        //打开读书页面，并将图书信息通过路由传递过去
        this.props.navigation.navigate("read_book", {item})
    }
}

export default DefaultPage;


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
