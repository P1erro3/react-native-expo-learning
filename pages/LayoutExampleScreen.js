import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutExampleScreen = () => (
    <View style={styles.container}>
        <View style={styles.box1}><Text style={styles.text}>Header</Text></View>
        <View style={styles.box2}><Text style={styles.text}>Body Content</Text></View>
        <View style={styles.box3}><Text style={styles.text}>Footer</Text></View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    box1: {
        height: 60,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3: {
        height: 40,
        backgroundColor: 'lightcoral',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});

export default LayoutExampleScreen;