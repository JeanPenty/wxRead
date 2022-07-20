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
    FlatList, TextInput
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

import {LinearGradient} from 'expo-linear-gradient';
import {Card} from 'react-native-shadow-cards';

class RecommendPage extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Text>RecommendPage</Text>
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
