import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { EvilIcons } from '@expo/vector-icons';

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'

export default function PendingItem({ orderNo, name, location, bill, payment, order }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <View style={styles.orderContainer}>
                    <Image source={require("../../assets/ApplicationImage/Order/order.png")} style={styles.icon} />
                    <Text style={styles.orderText}>Order No: {orderNo}</Text>
                </View>
                <View style={{ ...styles.orderContainer, ...{ backgroundColor: Colors.Red } }}>
                    <Image source={require("../../assets/ApplicationImage/Order/home.png")} style={styles.icon} />
                    <Text style={styles.orderText}>{name}</Text>
                </View>
                <View style={{
                    ...styles.orderContainer,
                    ...{ backgroundColor: Colors.White, borderWidth: 1, borderColor: Colors.Red }
                }}>
                    <Image source={require("../../assets/ApplicationImage/Order/search.png")} style={styles.icon} />
                    <Text style={{ ...styles.orderText, ...{ color: Colors.PureBlack } }}>{location}</Text>
                </View>
            </View>

            <View style={styles.rightContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>Bill: {bill}/=</Text>
                </View>
                <View style={{
                    ...styles.dateContainer, ...{
                        borderColor: Colors.Red
                    }
                }}>
                    <Text style={{ ...styles.date, ...{ color: Colors.Blue } }}>Payment: {payment}</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        ...styles.dateContainer,
                        ...{
                            backgroundColor: order ? Colors.Blue : Colors.Red,
                            borderColor: order ? Colors.Blue : Colors.Red,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 5
                        }
                    }}>
                    <Text style={{
                        ...styles.date, ...{
                            color: Colors.White,
                        }
                    }}>Details</Text>
                    <EvilIcons name="arrow-right" size={responsiveScreenFontSize(3)} color={Colors.White} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: responsiveScreenWidth(96),
        alignSelf: "center",
        backgroundColor: Colors.White,
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(1),
        marginTop: responsiveScreenHeight(2),
        flexDirection: "row",
        borderRadius: 8,
        gap: 10,
        elevation: 3
    },
    leftContainer: {
        width: responsiveScreenWidth(54),
        gap: responsiveScreenHeight(1.5),
    },

    orderContainer: {
        width: "98%",
        paddingHorizontal: responsiveScreenWidth(2),
        backgroundColor: Colors.Green,
        height: responsiveScreenHeight(3.5),
        justifyContent: "center",
        position: "relative",
        alignSelf: "flex-end"
    },
    orderText: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8),
        color: Colors.White,
        marginLeft: responsiveScreenWidth(8)
    },
    icon: {
        width: responsiveScreenWidth(10),
        height: responsiveScreenWidth(10),
        position: "absolute",
        resizeMode: "cover",
        left: responsiveScreenWidth(-2)

    },



    rightContainer: {
        width: responsiveScreenWidth(35),
        gap: responsiveScreenHeight(1.6),
        justifyContent: "center",

    },
    dateContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: Colors.Green,
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(0.5)
    },
    date: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8),
        color: Colors.Red,
        textAlign: "center"
    }
})