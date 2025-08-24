import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/LoginScreen";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import CounterScreen from "../pages/CounterScreen";
import ListManagerScrreen from "../pages/ListManagerScreen";
import StyleExampleScreen from "../pages/StyleExampleScreen";
import FlexboxExampleScreen from "../pages/FlexboxExampleScreen";
import LayoutExampleScreen from "../pages/LayoutExampleScreen";
import GridMenuExampleScreen from "../pages/GridMenuExampleScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Counter" component={CounterScreen} />
            <Stack.Screen name="ListManager" component={ListManagerScrreen} />
            <Stack.Screen name="StyleExample" component={StyleExampleScreen} />
            <Stack.Screen name="FlexboxExample" component={FlexboxExampleScreen} />
            <Stack.Screen name="LayoutExample" component={LayoutExampleScreen} />
            <Stack.Screen name="GridMenuExample" component={GridMenuExampleScreen} />
        </Stack.Navigator>
    );
}
