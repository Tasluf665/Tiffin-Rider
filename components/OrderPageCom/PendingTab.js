import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import PendingItem from './PendingItem'

export default function PendingTab() {
    return (
        <View>
            <ScrollView>
                <PendingItem
                    orderNo={"#23N3456"}
                    name={"Plan B Cafe"}
                    location={"Academic Building"}
                    bill={175}
                    payment={"Due"}
                />
                <View style={{ paddingBottom: responsiveScreenHeight(20) }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})