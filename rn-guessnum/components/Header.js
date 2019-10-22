import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
    return (
        <View>
            <Text style={styles.header}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
    },
});

export default Header;
