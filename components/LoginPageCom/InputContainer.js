import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import Colors from "../../constant/Colors";
import CustomeFonts from "../../constant/CustomeFonts";

export default function InputContainer({
    fieldName,
    text,
    setText,
    passwordField, //To find if the input field is a password field or not
}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text} numberOfLines={1}>
                    {fieldName}
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text) => {
                        setText(text);
                    }}
                    value={text}
                    secureTextEntry={passwordField}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: responsiveScreenHeight(1),
        marginHorizontal: responsiveScreenWidth(6),
    },
    textContainer: {
        backgroundColor: Colors.BackgroundColor_Gray,
        flexDirection: "row-reverse",
        alignItems: "center",
        width: responsiveScreenWidth(22),
    },
    text: {
        marginRight: 3,
        fontSize: responsiveScreenFontSize(1.9),
        fontFamily: CustomeFonts.Segoe_UI_Bold,
    },
    textInput: {
        fontSize: responsiveScreenFontSize(1.9),
        fontFamily: CustomeFonts.Segoe_UI,
    },
    inputContainer: {
        backgroundColor: Colors.BackgroundColor_Gray,
        marginLeft: responsiveScreenWidth(2),
        paddingHorizontal: 5,
        width: responsiveScreenWidth(44),
    },
});
