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
                title="Go to Counter"           // แก้ typo titale -> title
                onPress={() => navigation.navigate("Counter")}  // แก้ obpress -> onPress
            />
        </View>
    );
}
