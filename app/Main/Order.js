import { StyleSheet, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'

import TopBar from '../../components/common/TopBar'
import Colors from '../../constant/Colors';
import TabBar from '../../components/common/TabBar';

export default function Order() {
    const [select, setSelect] = React.useState(true)

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.tabContainer}>
                <TabBar select={select} setSelect={setSelect} btn1={"Order"} btn2={"Pending"} />
            </View>

            {select ? <></> : <></>}

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