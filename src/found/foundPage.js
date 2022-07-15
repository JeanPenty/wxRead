import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

class FoundPage extends Component {
    render() {
        return (
            <View>
                <Text>FoundPage</Text>
            </View>
        );
    }
}

export default FoundPage;
