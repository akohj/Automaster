import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PreCarMenu() {
  return (
    <View style={styles.container}>
      <Text>You have not added any cars!!</Text>
      <Button buttonStyle={styles.buttonContainer} children={'Scan'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
