import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>วิสิทธิ์ อิศรศักดิ์ ณ อยุธยา ทธด.102</Text>
            <Text></Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
            <Text></Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Details")}
            />
            <Text></Text>

            <Button
                title="Go to Counter"
                onPress={() => navigation.navigate("Counter")}
            />
            <Text></Text>

            <Button
                title="Go to List Manager"
                onPress={() => navigation.navigate("ListManager")}
            />
            <Text></Text>

            <Button
                title="Go to Style Example"
                onPress={() => navigation.navigate("StyleExample")}
            />
            <Text></Text>

            <Button
                title="Go to Flexbox Example"
                onPress={() => navigation.navigate("FlexboxExample")}
            />
            <Text></Text>

            <Button
                title="Go to Layout Example"
                onPress={() => navigation.navigate("LayoutExample")}
            />
            <Text></Text>
            <Button
                title="Go to Grid Menu Example"
                onPress={() => navigation.navigate("GridMenuExample")}
            />
            <Text></Text>
        </View>
    );
}
