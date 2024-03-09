import { StyleSheet, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'

import TopBar from '../../components/common/TopBar'
import Colors from '../../constant/Colors';

export default function Delivered() {

    return (
        <View style={styles.container}>
            <TopBar />
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


})