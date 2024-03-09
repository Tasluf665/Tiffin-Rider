import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
} from "react-native-responsive-dimensions";

import Colors from "../../constant/Colors";
import CustomeFonts from "../../constant/CustomeFonts"

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.tabBarContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const getImageSource = (label) => {
                        switch (label) {
                            case "Order":
                                return require("../../assets/ApplicationImage/order.png");
                            case "Delivered":
                                return require("../../assets/ApplicationImage/delivered.png");
                            case "Record":
                                return require("../../assets/ApplicationImage/record.png");
                            case "Exchange":
                                return require("../../assets/ApplicationImage/exchange.png");
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            activeOpacity={0.5}
                        >
                            <View style={{
                                ...styles.iconContainer,
                                ...{ backgroundColor: isFocused ? Colors.Black2 : Colors.Black },
                                ...{ borderTopLeftRadius: route.name === "Order" ? 20 : 0 },
                                ...{ borderTopRightRadius: route.name === "Exchange" ? 20 : 0 },
                            }}>
                                <View style={styles.iconImageContainer}>
                                    <Image source={getImageSource(label)} style={styles.icon} />
                                    {route.name === "Order" ? <Text style={styles.orderNum}>1</Text> : null}
                                    <Text style={styles.title}>{route.name}</Text>
                                </View>

                                {isFocused ? <View style={styles.focusLine}></View> : null}
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BackgroundColor_Gray,
    },
    tabBarContainer: {
        flexDirection: "row",
        backgroundColor: Colors.BackgroundColor_Gray,
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(7),
        marginVertical: responsiveScreenHeight(1),
        elevation: 5,
        gap: 2,
        justifyContent: "center"
    },
    iconContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        width: responsiveScreenWidth(24.4),
        backgroundColor: Colors.Black,
    },
    iconImageContainer: {
        width: "100%",
        alignItems: "center",
        position: "relative"
    },
    icon: {
        width: "55%",
        height: "55%",
        resizeMode: "contain",
        marginTop: 5
    },
    orderNum: {
        position: "absolute",
        color: Colors.Black2,
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        top: responsiveScreenHeight(0.4),
        fontSize: 12
    },
    title: {
        color: Colors.White,
        fontFamily: CustomeFonts.Segoe_UI_Bold
    },
    focusLine: {
        width: "100%",
        backgroundColor: Colors.Yellow,
        height: responsiveScreenHeight(0.5),
    },
})