import React from "react";
import { useFonts } from "expo-font";
import { Redirect } from "expo-router";

const index = () => {
    const [fontsLoaded] = useFonts({
        Segoe_UI: require("../assets/Fonts/Segoe_UI.ttf"),
        Segoe_UI_Bold: require("../assets/Fonts/Segoe_UI_Bold.ttf"),
        Segoe_UI_Bold_Italic: require("../assets/Fonts/Segoe_UI_Bold_Italic.ttf"),
        Segoe_UI_Italic: require("../assets/Fonts/Segoe_UI_Italic.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    // return <Redirect href={"/Main"} />;
    return <Redirect href={"/Authentication/LoginPage"} />;
};

export default index;
