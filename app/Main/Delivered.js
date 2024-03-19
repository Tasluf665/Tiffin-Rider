import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { router } from 'expo-router';

import TopBar from '../../components/common/TopBar'
import Colors from '../../constant/Colors';
import DeliverItem from '../../components/DeliveredPageCom/DeliverItem';
import CustomeFonts from '../../constant/CustomeFonts';

export default function Delivered() {

    return (
        <View style={styles.container}>
            <TopBar />
            <ScrollView>
                <DeliverItem
                    image={require("../../assets/ApplicationImage/Deliver/order.png")}
                    name={"Ibnul"}
                    time={"Time: 12:27 pm"}
                    date={"Date: 12-03-23"}
                    timer={"12.00"}
                    price={"৳120"}
                    btnContainerStyle={{ backgroundColor: Colors.Blue }}
                    imageContainerStyle={{ backgroundColor: Colors.Green }}
                    handleClick={() => {
                        // router.push({
                        //     pathname: "/Notification",
                        //     params: { stage: "stage1" }
                        // })
                    }}
                >
                    <View style={styles.statusContainer}>
                        <Image
                            source={require("../../assets/ApplicationImage/Deliver/deliver.png")}
                            style={styles.timer}
                        />
                        <Text style={styles.status}>Delivered</Text>
                    </View>
                </DeliverItem>
                <View style={{ paddingBottom: responsiveScreenHeight(0.5) }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: Colors.BackgroundColor_Gray,
    },
    tabContainer: {
        marginTop: responsiveScreenHeight(2)
    },

    timerContainer: {
        backgroundColor: Colors.Black2,
        flexDirection: "row",
        borderRadius: 10,
        width: responsiveScreenWidth(22),
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        paddingVertical: 1,
        alignSelf: "center"
    },
    timer: {
        width: responsiveScreenWidth(5),
        height: responsiveScreenWidth(5),
        resizeMode: "contain",
    },
    timerText: {
        color: Colors.Yellow,
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    },
    statusContainer: {
        backgroundColor: Colors.White,
        flexDirection: "row",
        width: responsiveScreenWidth(30),
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        paddingVertical: 1,
        borderRadius: 5,
    },
    status: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    },

})