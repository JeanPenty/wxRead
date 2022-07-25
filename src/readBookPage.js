//我的书单
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground,
    Button,
    StatusBar,
    FlatList, TextInput
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

import {LinearGradient} from 'expo-linear-gradient';
import {Card} from 'react-native-shadow-cards';

import PagerView from 'react-native-pager-view';

class ReadBookPage extends Component {
    constructor(props) {
        super(props);

        //接收路由传参
        const {route} = this.props;
        //alert(route.params.item.title);

        this.state = {
            isUseBG:false,
            bgImg:"",
            bgColor:"",
            chapters:"第1章 这是一个测试",

            bookData:[
                {
                    "content": "你是不是被上面几个例子中的背景所吸引，很好奇这些背景是怎么实现的？是否也想让自己的个人网站有同样炫酷且与众不同的背景呢？\n" +
                        "\n" +
                        "本小册将会帮你解答这个问题：如何使用 Canvas 制作出炫酷的网页背景特效。\n" +
                        "\n" +
                        "你可能好奇这种效果是怎么做到的呢？其实答案很简单，就是 HTML5 的新标签 —— Canvas。\n" +
                        "\n" +
                        "Canvas 自 HTML5 发布以来就受到了广泛的关注，但却很少在项目中使用，所以大部分前端攻城狮都只是知道，很少实践。\n" +
                        "\n" +
                        "本小册将带你进入 Canvas 的世界，为你展示 30+ 个 Canvas 项目，你会惊叹于 Canvas 所制作出的神奇效果。\n" +
                        "\n" +
                        "同时会带大家从零开始学习 Canvas：从零开始，教你绘制出基本图形。通过组合这些基本图形，将产生不可思议的化学反应~"
                },
                {
                    "content": "你是不是被上面几个例子中的背景所吸引，很好奇这些背景是怎么实现的？是否也想让自己的个人网站有同样炫酷且与众不同的背景呢？\n" +
                        "\n" +
                        "本小册将会帮你解答这个问题：如何使用 Canvas 制作出炫酷的网页背景特效。\n" +
                        "\n" +
                        "你可能好奇这种效果是怎么做到的呢？其实答案很简单，就是 HTML5 的新标签 —— Canvas。\n" +
                        "\n" +
                        "Canvas 自 HTML5 发布以来就受到了广泛的关注，但却很少在项目中使用，所以大部分前端攻城狮都只是知道，很少实践。\n" +
                        "\n" +
                        "本小册将带你进入 Canvas 的世界，为你展示 30+ 个 Canvas 项目，你会惊叹于 Canvas 所制作出的神奇效果。\n" +
                        "\n" +
                        "同时会带大家从零开始学习 Canvas：从零开始，教你绘制出基本图形。通过组合这些基本图形，将产生不可思议的化学反应~"
                },
                {
                    "content": "你是不是被上面几个例子中的背景所吸引，很好奇这些背景是怎么实现的？是否也想让自己的个人网站有同样炫酷且与众不同的背景呢？\n" +
                        "\n" +
                        "本小册将会帮你解答这个问题：如何使用 Canvas 制作出炫酷的网页背景特效。\n" +
                        "\n" +
                        "你可能好奇这种效果是怎么做到的呢？其实答案很简单，就是 HTML5 的新标签 —— Canvas。\n" +
                        "\n" +
                        "Canvas 自 HTML5 发布以来就受到了广泛的关注，但却很少在项目中使用，所以大部分前端攻城狮都只是知道，很少实践。\n" +
                        "\n" +
                        "本小册将带你进入 Canvas 的世界，为你展示 30+ 个 Canvas 项目，你会惊叹于 Canvas 所制作出的神奇效果。\n" +
                        "\n" +
                        "同时会带大家从零开始学习 Canvas：从零开始，教你绘制出基本图形。通过组合这些基本图形，将产生不可思议的化学反应~"
                },
                {
                    "content":"在入门了 Canvas 之后，将带大家分析那些可以作为背景的 Canvas 炫酷特效，总结出这些炫酷特效都有哪些特点。日后这些就是你的思想武器。掌握了这些规律，你就相当于站在了巨人的肩膀上，再制作炫酷的网页背景特效将会事半功倍。\n" +
                        "\n" +
                        "在了解了这些特点之后，我们将通过一个具体的案例来一起实现一下这些特效。\n" +
                        "\n" +
                        "最终， Canvas 基础知识 + 特效特点 + 你丰富的想象力 = 属于你自己的炫酷网页背景特效。\n" +
                        "\n"
                }
            ],

            hideStatusBar:true,
        }

    }

    renderBookData(index, value){
        return (
            <View style={{}}>
                <Text
                    selectable={true}
                    style={{fontSize:20, color:"rgba(0,0,0,0.85)", letterSpacing:1, lineHeight:30}}
                >{(value.content)}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.body}>
                <StatusBar hidden={(this.state.hideStatusBar)}/>
                {
                    this.state.isUseBG ?
                        <ImageBackground
                            source={require("../assets/readBG/default.webp")}
                            opacity={0.4}
                            style={{width:width, height:height}}
                        >
                            <TouchableOpacity
                                onLongPress={()=>{
                                    if (this.state.hideStatusBar){
                                        this.setState({hideStatusBar:false})
                                    }else {
                                        this.setState({hideStatusBar:true})
                                    }
                                }}
                                activeOpacity={1}
                                style={{flex:1}}>
                                <View style={{width:width, height:80}}>
                                    <View style={{width:width, height:50}}></View>
                                    <View style={{width:width, height:30, justifyContent:"center"}}>
                                        <Text style={{fontSize:14, marginLeft:10, color:"#00000065"}}>{(this.state.chapters)}</Text>
                                    </View>
                                </View>
                                <PagerView
                                    style={{flex:1, margin:10}}
                                    initialPage={0}
                                    //showPageIndicator={false} //视图底部展示指示器，设置为true可将该控件用作banner使用
                                    //onPageSelected={()=>{alert(111)}}  //页面切换时调用该回调
                                >
                                    {this.state.bookData.map((value, index) => this.renderBookData(index, value))}
                                </PagerView>
                            </TouchableOpacity>
                        </ImageBackground>
                        :
                        <TouchableOpacity
                            onLongPress={()=>{
                                if (this.state.hideStatusBar){
                                    this.setState({hideStatusBar:false})
                                }else {
                                    this.setState({hideStatusBar:true})
                                }
                            }}
                            activeOpacity={1.0}
                            style={{flex:1}}>
                            <View style={{width:width, height:80}}>
                                <View style={{width:width, height:50}}></View>
                                <View style={{width:width, height:30, justifyContent:"center"}}>
                                    <Text style={{fontSize:14, marginLeft:10, color:"#00000065"}}>{(this.state.chapters)}</Text>
                                </View>
                            </View>
                            <PagerView
                                style={{flex:1, margin:10}}
                                initialPage={0}
                                //showPageIndicator={false} //视图底部展示指示器，设置为true可将该控件用作banner使用
                                //onPageSelected={()=>{alert(111)}}  //页面切换时调用该回调
                            >
                                {this.state.bookData.map((value, index) => this.renderBookData(index, value))}
                            </PagerView>
                        </TouchableOpacity>
                }

                {this._renderTop()}
                {this._renderBottom()}
                {this._renderBottomBtb()}
            </View>
        );
    }

    _renderTop = () =>{
        if (this.state.hideStatusBar === false){
            return (
                <View style={{height:90, width:width, backgroundColor: "#f3efd2", position: "absolute", display: "flex", borderBottomWidth:1, borderColor:"#00000010"}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:1, flexDirection:"row", display: "flex"}}>
                        <View style={{flex:1, justifyContent:"center"}}>
                            <TouchableOpacity
                                onPress={()=>{this.props.navigation.goBack()}}
                                style={{marginLeft:15}}
                            >
                                <Image source={require("../assets/icons/back.png")} style={{width:12, height:20}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:4, flexDirection:"row", alignItems:"center", justifyContent:"flex-end", marginRight:15}}>
                            <TouchableOpacity
                                style={{marginRight:25}}
                            >
                                <Image source={require("../assets/icons/buy.png")}  style={{width:24, height:24}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{marginRight:25}}
                            >
                                <Image source={require("../assets/icons/read_shelf.png")}  style={{width:24, height:24}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{marginRight:25}}
                            >
                                <Image source={require("../assets/icons/buy.png")}  style={{width:24, height:24}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{marginRight:25}}
                            >
                                <Image source={require("../assets/icons/share.png")}  style={{width:24, height:24}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{}}
                            >
                                <Image source={require("../assets/icons/more.png")}  style={{width:24, height:24}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    }

    _renderBottom = () =>{
        if (this.state.hideStatusBar === false){
            return (
                <View style={{top:height - 80, height:100, width:width, position: "absolute", backgroundColor: "#f3efd2"}}></View>
            );
        }
    }
    _renderBottomBtb = () =>{
        //
        if (this.state.hideStatusBar === false){
            return (
                <View style={{top:height - 160, height:80, width:width, position: "absolute",  display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-end"}}>
                    <TouchableOpacity
                        style={{width:60, height:60, borderRadius:30, backgroundColor: "#000000", marginRight:15, alignItems:"center", justifyContent:"center"}}
                    >
                        <Image source={require("../assets/icons/quanzi_w.png")} style={{width:40, height:40}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:60, height:60, borderRadius:30, backgroundColor: "#000000", marginRight:15, alignItems:"center", justifyContent:"center"}}
                    >
                        <Image source={require("../assets/icons/listen_book.png")} style={{width:40, height:40}}></Image>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

export default ReadBookPage;


const styles = StyleSheet.create({
    body: {
        width: width,
        height: height,
        backgroundColor:"#f3efd255",
        display:"flex",
    },
})
