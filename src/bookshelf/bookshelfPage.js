import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, Image, TextInput, TouchableOpacity,
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

class BookshelfPage extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={{width:width.valueOf(), height:100, display:"flex"}}>
                    <View style={{flex: 1.5}}/>
                    <View style={{flex:3.5, display:"flex", alignItems:'center', justifyContent:'center'}}>
                        <View
                            style={{width:width - 40, height:40, borderRadius:20, backgroundColor:"#00000010", display:"flex", flexDirection:"row"}}
                        >
                            <View style={{flex:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <Image
                                    source={require("../../assets/icons/search.png")}
                                    style={{width: 30, height: 30}}
                                />
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
                                    style={{flex:1, alignItems:"flex-end", justifyContent:"center", marginRight:15}}
                                >
                                    <Image source={require("../../assets/icons/add.png")} style={{width:20, height:20}}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default BookshelfPage;


const styles = StyleSheet.create({
    body:{
        width:width,
        height:height,
    }
})
