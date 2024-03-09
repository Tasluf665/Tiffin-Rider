import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

import Colors from "../../constant/Colors";
import CustomeFonts from "../../constant/CustomeFonts";

export default function TabBar({ setSelect, select, btn1, btn2 }) {
    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => setSelect(true)} activeOpacity={0.7} style={styles.tabItemContainer}>
                <View style={{
                    ...styles.tabItem,
                    ...{
                        backgroundColor: select ? Colors.Yellow : Colors.White,
                        borderColor: select ? Colors.Black : Colors.Red
                    }
                }}>
                    <Text style={styles.tabItemText}>{btn1}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelect(false)} activeOpacity={0.7} style={styles.tabItemContainer}>
                <View style={{
                    ...styles.tabItem,
                    ...{
                        backgroundColor: !select ? Colors.Yellow : Colors.White,
                        borderColor: !select ? Colors.Black : Colors.Red
                    }
                }}>
                    <Text style={styles.tabItemText}>{btn2}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: responsiveScreenWidth(2),
        marginBottom: responsiveScreenHeight(1),
    },

    tabItemContainer: {
        width: "48%",
        backgroundColor: Colors.White,
        paddingHorizontal: 10,
        paddingVertical: responsiveScreenHeight(0.8),
        elevation: 8,
    },
    tabItem: {
        width: "100%",
        paddingVertical: responsiveScreenHeight(0.6),
        borderWidth: 1,
    },
    tabItemText: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2),
        textAlign: "center"
    }
})