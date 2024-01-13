import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';

export default function CarProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.Container}></View>
      <View style={styles.SecondContainer}>
        <View style={styles.scrollMenu}>
          <Text>Your car Information</Text>
          <View style={styles.menuContainer}></View>
        </View>

        <View style={styles.scrollMenu}>
          <Text>Maintenance log</Text>
          <View style={styles.menuContainer}></View>
        </View>
      </View>
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
  Container: {
    backgroundColor: Colors.blue,
    width: 350,
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  SecondContainer: {
    backgroundColor: Colors.blue,
    width: 350,
    height: 600,
    marginBottom: 15,
    alignItems: 'baseline',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'column',
  },
  scrollMenu: {
    height: '50%',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuContainer: {
    height: '80%',
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 10,
  },
});
