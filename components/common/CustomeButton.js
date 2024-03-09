import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import React from "react";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import Colors from "../../constant/Colors";
import CustomeFonts from "../../constant/CustomeFonts";

export default function CustomeButton({ onPress, title, style }) {
    return (
        <TouchableNativeFeedback onPress={onPress} style={styles.btnContainer}>
            <View style={{ ...styles.button, ...style }}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: responsiveScreenHeight(1.2),
        borderRadius: 4,
        elevation: 3,
        width: responsiveScreenWidth(80),
        marginTop: responsiveScreenHeight(5),
    },
    text: {
        fontSize: responsiveScreenFontSize(2),
        color: Colors.White,
        fontFamily: CustomeFonts.Segoe_UI_Bold,
    },
});
