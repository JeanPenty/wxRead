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

class ClassifyChildPage extends Component {
    constructor(props) {
        super(props);

        //接收路由传参
        const {route} = this.props;
        //alert(route.params.item.title);

        this.state = {
            title: route.params.item.title,

            classifyData:["全部","社会小说","情感小说","青春文学","科幻经典","战争军旅","玄幻精品","恐怖惊悚","悬疑推理","世界名著","外国文学","武侠经典","影视原著"],

            data:[]
        }
    }


    renderClassify(index, item){
        return (
            <View style={{width:width/4, display: "flex"}}>
                <TouchableOpacity
                    //onPress={this.onClickCard.bind(this, item)}
                    style={{flex:1, margin:10, display: "flex" ,  justifyContent:"center", }}>
                    <Text style={{fontSize:16, color:"#00000065"}}>{(item)}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={{width:width, height:100, display:"flex"}}>
                    <View style={{flex:2}}>{/*占位*/}</View>
                    <View style={{flex:3, flexDirection:"row", display:"flex", borderBottomWidth:1, borderColor:"#00000010"}}>
                        <TouchableOpacity
                            onPress={this.goBack}
                            style={{flex:1, justifyContent:"center"}}>
                            <Image source={require("../../../assets/icons/back.png")} style={{width:10, height:20, marginLeft:15}}></Image>
                        </TouchableOpacity>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
                            <Text style={{fontSize:18, fontWeight:"bold"}}>{(this.state.title)}</Text>
                        </View>
                        <View style={{flex:1}}></View>
                    </View>
                </View>
                <FlatList
                    data={this.state.data}
                    ListHeaderComponent={this._renderListHeader}
                    renderItem={this._renderItem}
                ></FlatList>
            </View>
        );
    }

    _renderListHeader = () =>{
        return (
            <View
                style={{display: "flex", width:width, borderBottomWidth:1, borderColor:"#00000010"}}
            >
                <View style={{flex:1,
                    flexDirection:"row",
                    display: "flex",
                    flexWrap:"wrap",
                    //justifyContent:"space-between",
                }}>
                    {this.state.classifyData.map((value, index) => this.renderClassify(index, value))}
                </View>
            </View>
        );
    }

    _renderItem = ({item, index}) =>{
        //
    }
        goBack = () =>{
        this.props.navigation.goBack();
    }
}

export default ClassifyChildPage;

const styles = StyleSheet.create({
    body: {
        width: width,
        height: height,
        backgroundColor:"#fff",
        display:"flex",
    },
})
