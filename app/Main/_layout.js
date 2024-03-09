import { Tabs } from "expo-router/tabs";
import CustomTabBar from "../../components/common/CustomTabBar";

export default () => {
    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen name="Order" />
            <Tabs.Screen name="Delivered" />
            <Tabs.Screen name="Record" />
            <Tabs.Screen name="Exchange" />
        </Tabs>
    );
};
