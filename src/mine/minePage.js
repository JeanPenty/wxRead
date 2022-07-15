import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

class MinePage extends Component {
    render() {
        return (
            <View>
                <Text>MinePage</Text>
            </View>
        );
    }
}

export default MinePage;
