import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'

import PaymentItem from './PaymentItem'

export default function PaymentTab() {
    return (
        <View>
            <ScrollView>
                <PaymentItem
                    returned={20}
                    cancelled={2}
                    totalOrder={3}
                    delivered={15}
                    date={"23-12-2024"}
                    duty={"11:07 pm - 10:05 pm"}
                    status={"Attand"}
                />
                <PaymentItem
                    returned={20}
                    cancelled={2}
                    totalOrder={3}
                    delivered={15}
                    date={"23-12-2024"}
                    duty={"11:07 pm - 10:05 pm"}
                    status={"Absent"}
                />
                <View style={{ paddingBottom: responsiveScreenHeight(20) }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})