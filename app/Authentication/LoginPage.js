import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { router } from "expo-router";

import Colors from '../../constant/Colors';
import CustomeFonts from '../../constant/CustomeFonts'
import LogoContainer from '../../components/common/LogoContainer'
import InputContainer from '../../components/LoginPageCom/InputContainer';
import CustomeButton from '../../components/common/CustomeButton';
import CycleLogoContainer from '../../components/common/CycleLogoContainer';

export default function LoginPage() {
    const [mobile, setMobile] = React.useState();
    const [pass, setPass] = React.useState();

    const handleLoginBtn = () => {
        router.replace("/Main");
    };
    return (
        <View style={styles.container}>
            <LogoContainer style={{ marginTop: responsiveScreenHeight(3) }} />
            <View style={styles.inputFieldsContainer}>
                <Text style={styles.text}>Rider Account</Text>
                <InputContainer fieldName="Mobile:" text={mobile} setText={setMobile} />
                <InputContainer
                    fieldName="Password:"
                    text={pass}
                    setText={setPass}
                    passwordField={true}
                />
                <View style={styles.forgotBtnContainer}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
                        <View style={styles.forgotBtn}>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <CustomeButton
                title="Log In"
                style={{
                    backgroundColor: Colors.Red,
                    marginTop: responsiveScreenHeight(4),
                }}
                onPress={handleLoginBtn}
            />
            <CycleLogoContainer
                style={{
                    marginTop: responsiveScreenHeight(10),
                    height: responsiveScreenHeight(17),
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
        backgroundColor: Colors.BackgroundColor_Gray,
    },
    inputFieldsContainer: {
        backgroundColor: Colors.White,
        borderRadius: 10,
        elevation: 5,
        width: responsiveScreenWidth(80),
        marginTop: responsiveScreenHeight(5),
        paddingVertical: responsiveScreenHeight(2),
    },
    text: {
        fontSize: responsiveScreenFontSize(2.5),
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        textAlign: "center",
        marginBottom: responsiveScreenHeight(1)
    },
    forgotBtnContainer: {
        alignItems: "flex-end",
        paddingHorizontal: responsiveScreenWidth(6),
        marginTop: responsiveScreenHeight(1),
    },
    forgotBtn: {
        backgroundColor: Colors.BackgroundColor_Gray,
        paddingHorizontal: responsiveScreenWidth(3),
        paddingVertical: responsiveScreenHeight(0.7),
        borderRadius: 50,
    },
    forgotText: {
        fontSize: responsiveScreenFontSize(1.9),
        fontFamily: CustomeFonts.Segoe_UI_Bold,
    },
})