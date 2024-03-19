import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Feather } from '@expo/vector-icons';

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts';

export default function DeliverItem({ children, image, name, time, date, price, btnContainerStyle, imageContainerStyle, handleClick }) {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View style={{ ...styles.imageContainer, ...imageContainerStyle }}>
                    <Image
                        source={image}
                        style={styles.image}
                    />

                </View>
                <View style={styles.nameTimeContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>{name}</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.time}>{time}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.date}>{date}</Text>
                    {children}
                </View>
                <View style={styles.priceDetailsContainer}>
                    <Text style={styles.price}>{price}</Text>
                    <TouchableOpacity onPress={handleClick} activeOpacity={0.7} style={{ ...styles.btnContainer, ...btnContainerStyle }}>
                        <Text style={styles.btnText}>Details</Text>
                        <Feather name="arrow-right-circle" size={18} color={Colors.White} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(100),
        alignItems: "center",
        marginTop: responsiveScreenHeight(2.5),
    },
    itemContainer: {
        width: responsiveScreenWidth(78),
        backgroundColor: Colors.Black3,
        paddingVertical: responsiveScreenHeight(0.4),
        paddingHorizontal: responsiveScreenWidth(2),
        alignItems: "center",
        position: "relative",
        flexDirection: "row",
        gap: 1
    },
    imageContainer: {
        position: "absolute",
        width: responsiveScreenWidth(15),
        height: responsiveScreenWidth(15),
        backgroundColor: Colors.Black2,
        left: responsiveScreenWidth(-10.8),
        top: responsiveScreenHeight(-0.7),
        borderRadius: responsiveScreenWidth(12),
        justifyContent: "center",
    },
    image: {
        width: "auto",
        height: "70%",
        resizeMode: "contain",
    },
    nameTimeContainer: {
        width: responsiveScreenWidth(32),
        marginLeft: responsiveScreenWidth(3),
        height: responsiveScreenHeight(5),
        justifyContent: "space-between",
    },
    name: {
        width: "98%",
        backgroundColor: Colors.White,
        borderRadius: 5,
        paddingHorizontal: 6,
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.7)
    },
    time: {
        width: "98%",
        backgroundColor: Colors.White,
        borderRadius: 5,
        paddingHorizontal: 6,
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.7)
    },
    dateContainer: {
        width: responsiveScreenWidth(35),
        height: responsiveScreenHeight(5),
        justifyContent: "space-between",
    },
    date: {
        width: "98%",
        backgroundColor: Colors.White,
        borderRadius: 5,
        paddingHorizontal: 6,
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.7),
        textAlign: "center"
    },
    priceDetailsContainer: {
        width: responsiveScreenWidth(15),
        height: responsiveScreenHeight(7),
        backgroundColor: "white",
        position: "absolute",
        right: responsiveScreenWidth(-10),
        top: responsiveScreenHeight(-0.7),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    price: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        textAlign: "center",
        marginTop: responsiveScreenHeight(1.5),
        width: responsiveScreenWidth(14),
        fontSize: responsiveScreenFontSize(1.7)
    },
    btnContainer: {
        width: responsiveScreenWidth(20),
        height: "auto",
        backgroundColor: Colors.Red,
        position: "absolute",
        bottom: 0,
        right: -3,
        paddingVertical: 2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 5,
        gap: 4
    },
    btnText: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        color: Colors.White,
        fontSize: responsiveScreenFontSize(1.6)
    }

})