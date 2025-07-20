import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>วิสิทธิ์ อิศรศักดิ์ ณ อยุธยา ทธด.102</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
