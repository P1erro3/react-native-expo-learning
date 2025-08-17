import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GridMenuExampleScreen = () => (
    <View style={styles.container}>
        <View style={styles.box1}>
            <Text style={styles.text}>Menu 1</Text>
        </View>
        <View style={styles.box2}>
            <Text style={styles.text}>Menu 2</Text>
        </View>
        <View style={styles.box3}>
            <Text style={styles.text}>Menu 3</Text>
        </View>
        <View style={styles.box4}>
            <Text style={styles.text}>Menu 4</Text>
        </View>
        <View style={styles.box5}>
            <Text style={styles.text}>Menu 5</Text>
        </View>
        <View style={styles.box6}>
            <Text style={styles.text}>Menu 6</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
    },
    box1: {
        width: "48%",
        height: 120,
        marginBottom: 10,
        backgroundColor: "#ff6347",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    box2: {
        width: "48%",
        height: 120,
        marginBottom: 10,
        backgroundColor: "#4682b4",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    box3: {
        width: "48%",
        height: 120,
        marginBottom: 10,
        backgroundColor: "#6a5acd",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    box4: {
        width: "48%",
        height: 120,
        marginBottom: 10,
        backgroundColor: "#3cb371",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    box5: {
        width: "48%",
        height: 120,
        marginBottom: 10,
        backgroundColor: "#ffa500",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    box6: {
        width: "48%",
        height: 120,
        marginBottom: 10,
        backgroundColor: "#dc143c",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default GridMenuExampleScreen;