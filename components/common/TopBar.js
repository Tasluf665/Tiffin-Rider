import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-switch';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts';

export default function TopBar() {
    let orderNum = 1;
    const [orderStatus, setOrderStatus] = React.useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../../assets/ApplicationImage/CycleLogo.png")}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.text}>Order ({orderNum})</Text>
                <View style={styles.swithContainer}>
                    <Switch
                        value={orderStatus}
                        onValueChange={() => setOrderStatus(state => !state)}
                        circleSize={22}
                        barHeight={22}
                        circleBorderWidth={2}
                        backgroundActive={Colors.Black}
                        backgroundInactive={Colors.Black4}
                        circleActiveColor={Colors.Yellow}
                        circleInActiveColor={Colors.Red}
                        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                        renderActiveText={true}
                        renderInActiveText={true}
                        activeText={'On'}
                        inActiveText={'Off'}
                        switchWidthMultiplier={2.8}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(100),
        alignItems: "center",
        marginTop: responsiveScreenHeight(2),
    },
    barContainer: {
        width: responsiveScreenWidth(90),
        backgroundColor: Colors.White,
        paddingVertical: responsiveScreenHeight(0.8),
        paddingHorizontal: responsiveScreenWidth(2),
        borderRadius: 7,
        alignItems: "center",
        position: "relative"
    },
    logoContainer: {
        position: "absolute",
        width: responsiveScreenWidth(12),
        height: responsiveScreenWidth(12),
        backgroundColor: Colors.Yellow,
        left: responsiveScreenWidth(-1),
        top: responsiveScreenHeight(-0.7),
        borderRadius: responsiveScreenWidth(12),
        justifyContent: "center",
    },
    logo: {
        width: "auto",
        height: "85%",
        resizeMode: "contain",
    },
    text: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2)
    },
    swithContainer: {
        position: "absolute",
        right: responsiveScreenWidth(2),
        top: responsiveScreenHeight(1)
    }
})