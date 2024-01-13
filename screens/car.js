import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarMenu from '../components/carcomponents/carmenu';
import CarProfile from '../components/carcomponents/carprofile';
import PreCarMenu from '../components/carcomponents/precarmenu';

export default function Car() {
  return (
    <View style={styles.container}>
     <CarMenu/>
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
