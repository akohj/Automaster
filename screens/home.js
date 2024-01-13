import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from '../components/homecomponent/profilesection';
import Output from '../components/homecomponent/outputsection';

export default function Home() {
  return (
    <View style={styles.container}>
     <Profile/>
     <Output/>
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
