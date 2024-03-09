import { StyleSheet, View, Image } from "react-native";
import React from "react";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
} from "react-native-responsive-dimensions";

export default function LogoContainer({ style }) {
    return (
        <View style={{ ...styles.logoContainer, ...style }}>
            <Image
                source={require("../../assets/ApplicationImage/logo.png")}
                style={styles.logo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(12),
    },
    logo: {
        width: "auto",
        height: responsiveScreenHeight(11),
        resizeMode: "contain",
    },
});
