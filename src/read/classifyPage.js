{/*分类*/}
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground,
    Button,
    FlatList,
    TextInput,
    ScrollView,
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

import {LinearGradient} from 'expo-linear-gradient';
import {Card} from 'react-native-shadow-cards';

const List = require("./testData/classifyData.json")

class ClassifyPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classifyData:List.data,
        }
    }

    renderClassifyCard(index, item){
        return (
            <Card
                elevation={2}
                cornerRadius={5}
                opacity={0.2}
                style={{width:width/2 - 20,
                    height:120,
                    backgroundColor: "#fff",
                    display:"flex",
                    marginTop:20,
                }}>
                <TouchableOpacity
                    onPress={this.onClickCard.bind(this, item)}
                    style={{flex:1, margin:10, display: "flex", flexDirection:"row"}}>
                    <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
                        <Image source={require("../../assets/WechatIMG278.jpeg")} style={{width:60, height:100}}></Image>
                    </View>
                    <View style={{flex:3, display: "flex"}}>
                        <View style={{flex:1, alignItems:"center", justifyContent:"flex-end"}}>
                            <Text style={{fontSize:18, fontWeight:"bold", color:"rgba(0,0,0,0.65)"}}>{(item.title)}</Text>
                        </View>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                            <Text style={{color:"#00000065"}}>{(item.book_count)}本书籍</Text>
                        </View>
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
                    style={{flex:1, display: "flex"}}
                >
                    <View
                        style={{flex:1,
                            flexDirection:"row",
                            display: "flex",
                            flexWrap:"wrap",
                            justifyContent:"space-between",
                            marginBottom:100,
                            marginLeft:10,
                            marginRight:10,
                        }}
                    >
                        {this.state.classifyData.map((value, index) => this.renderClassifyCard(index, value))}
                    </View>
                </ScrollView>
            </View>
        );
    }

    onClickCard(item){
        //alert(item.title)
        this.props.navigation.navigate("classify_child", {item})
        switch (item.title){
            case "玄幻精品":{
                //TODO:
            }break;
            case "政治军事":{
                //TODO:
            }break;
            case "精品小说":{
                //TODO:
            }break;
            case "会员专享":{
                //TODO:
            }break;
            case "文学":{
                //TODO:
            }break;
            case "历史":{
                //TODO:
            }break;
            case "经济理财":{
                //TODO:
            }break;
            case "社会小说":{
                //TODO:
            }break;
            case "悬疑推理":{
                //TODO:
            }break;
            case "哲学宗教":{
                //TODO:
            }break;
            case "心理":{
                //TODO:
            }break;
            case "影视原著":{
                //TODO:
            }break;
            case "社会文化":{
                //TODO:
            }break;
            case "人物传记":{
                //TODO:
            }break;
            case "情感小说":{
                //TODO:
            }break;
            case "个人成长":{
                //TODO:
            }break;
            case "世界名著":{
                //TODO:
            }break;
            case "生活百科":{
                //TODO:
            }break;
            case "科幻经典":{
                //TODO:
            }break;
            case "医学健康":{
                //TODO:
            }break;
            case "教育学习":{
                //TODO:
            }break;
            case "计算机":{
                //TODO:
            }break;
            case "科学科技":{
                //TODO:
            }break;
            case "艺术":{
                //TODO:
            }break;
            case "童书":{
                //TODO:
            }break;
            case "期刊专栏":{
                //TODO:
            }break;
            case "原版书":{
                //TODO:
            }break;
            case "男生小说":{
                //TODO:
            }break;
            case "女生小说":{
                //TODO:
            }break;
            default:
                break;
        }
    }
}

export default ClassifyPage;


const styles = StyleSheet.create({
    body: {
        width: width,
        height: height,
        backgroundColor:"#fff",
        display:"flex",
    },
})
