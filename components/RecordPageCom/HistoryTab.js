import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'

import HistoryItem from './HistoryItem'

export default function HistoryTab() {
    return (
        <View>
            <ScrollView>
                <HistoryItem
                    orderNo={"#23N3456"}
                    name={"Plan B Cafe"}
                    location={"Academic Building"}
                    bill={175}
                    payment={"On Hand"}
                    order={true}
                />
                <View style={{ paddingBottom: responsiveScreenHeight(15) }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})