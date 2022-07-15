import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

class BookshelfPage extends Component {
    render() {
        return (
            <View>
                <Text>BookshelfPage</Text>
            </View>
        );
    }
}

export default BookshelfPage;
