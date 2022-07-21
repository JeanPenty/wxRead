//进度
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
import CollectBookListPage from "./collectBookListPage";

const List = require("./testData/progress.json")
class ProgressPage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            progressData: List.data,
        }
    }


    renderProgressClassify(index, value){
        return (
            <Card
                elevation={2}
                cornerRadius={5}
                opacity={0.2}
                style={{width: width/3 - 30,
                    height:(width/3 - 30)*1.5,
                    display:"flex",
                    marginTop:20,
                    marginLeft:20,
                }}>
                <TouchableOpacity
                    //onPress={this.onClickCard.bind(this, item)}
                    style={{flex:1, display: "flex"}}>
                    <View style={{flex:2, display:"flex"}}>
                        <ImageBackground
                            source={require("../../assets/classifyCover/wenxue.jpeg")}
                            style={{width:width/3 - 30, height:(width/3 - 30)*1.5*0.66,}}
                        ></ImageBackground>
                    </View>
                    <View style={{flex:1, display:"flex"}}>
                        <View style={{flex:1, justifyContent:"center"}}>
                            <Text
                                ellipsizeMode={"tail"}
                                numberOfLines={1}
                                style={{fontSize:14,fontWeight:"bold", marginLeft:5}}
                            >{(value.title)}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text
                                ellipsizeMode={"tail"}
                                numberOfLines={1}
                                style={{fontSize:14, color:"#00000065", marginLeft:5}}
                            >{(value.count)}本</Text>
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
                >
                    <View
                        style={{flex:1,
                            flexDirection:"row",
                            display: "flex",
                            flexWrap:'wrap',
                            //justifyContent:"space-between",
                            marginBottom:400,
                        }}
                    >
                        {this.state.progressData.map((value, index) => this.renderProgressClassify(index, value))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ProgressPage;


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
