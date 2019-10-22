import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
    return (
        // props children, content that is passed in between Card/custom component
        // since props.style is the 2nd argument, it will overwrite first argument
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5, //this is for android only
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    },
});
export default Card;
