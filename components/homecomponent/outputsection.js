import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

export default function Output() {
  return (
    <View style={styles.container}>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: 450,
    width: '90%',
    borderColor: Colors.blue,
    borderRadius: 10


  },
});
