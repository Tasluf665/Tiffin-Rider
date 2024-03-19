import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'

export default function PaymentItem({ returned, cancelled, totalOrder, delivered, date, duty, status }) {

    return (
        <View style={styles.itemContainer}>
            <Image
                source={require("../../assets/ApplicationImage/Record/money.png")}
                style={styles.moneyLogo}
            />
            <Text style={styles.recordText}>Records</Text>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Return:</Text>
                <Text style={styles.title}>Cancelled:</Text>
                <Text style={styles.title}>Total Order:</Text>
                <Text style={styles.title}>Delivered:</Text>
            </View>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{returned}</Text>
                <Text style={styles.number}>{cancelled}</Text>
                <Text style={styles.number}>{totalOrder}</Text>
                <Text style={styles.number}>{delivered}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={{
                    ...styles.dateContainer, ...{
                        borderColor: Colors.Green
                    }
                }}>
                    <Text style={styles.date}>Date: {date}</Text>
                </View>
                <View style={{
                    ...styles.dateContainer, ...{
                        borderColor: Colors.Blue
                    }
                }}>
                    <Text style={styles.date}>Duty: {duty}</Text>
                </View>
                <View style={{
                    ...styles.dateContainer,
                    ...{
                        backgroundColor: status == "Attand" ? Colors.Green : Colors.Red,
                        borderColor: status == "Attand" ? Colors.Green : Colors.Red
                    }
                }}>
                    <Text style={{
                        ...styles.date, ...{
                            color: Colors.White,
                        }
                    }}>Status: {status}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    moneyLogo: {
        width: responsiveScreenWidth(10),
        height: responsiveScreenWidth(10),
        position: "absolute",
        top: responsiveScreenHeight(0.4),
        left: responsiveScreenWidth(1),
        zIndex: 1
    },
    recordText: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.5),
        position: "absolute",
        top: responsiveScreenHeight(0.8),
        left: responsiveScreenWidth(10),
        backgroundColor: Colors.pink2,
        paddingHorizontal: responsiveScreenWidth(3),
        paddingVertical: responsiveScreenHeight(0.2)
    },
    itemContainer: {
        width: responsiveScreenWidth(96),
        alignSelf: "center",
        backgroundColor: Colors.White,
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(1),
        marginTop: responsiveScreenHeight(2),
        flexDirection: "row",
        borderRadius: 8,
        gap: 5,
        elevation: 3
    },
    titleContainer: {
        width: responsiveScreenWidth(26),
        alignItems: "flex-end",
        gap: responsiveScreenHeight(0.5),
        justifyContent: "center",
        marginTop: responsiveScreenHeight(1)
    },
    title: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    },
    numberContainer: {
        width: responsiveScreenWidth(18),
        alignItems: "center",
        gap: responsiveScreenHeight(0.5),
        justifyContent: "center",
        marginTop: responsiveScreenHeight(1)
    },
    number: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    },
    rightContainer: {
        width: responsiveScreenWidth(46),
        gap: responsiveScreenHeight(1),
        justifyContent: "center",

    },
    dateContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: Colors.Blue,
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(0.5)
    },
    date: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    }
})