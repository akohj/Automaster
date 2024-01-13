
import { StyleSheet, Text, View } from 'react-native';

import CarButton from '../../utilities/carbutton';
import Colors from '../../constants/colors';

export default function CarMenu() {
  return (
    <View style = {styles.container}>
      <CarButton children={'text'} buttonStyle={styles.buttonContainer} />
      <CarButton buttonStyle={styles.buttonContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 65,
  },
  buttonContainer: {
    backgroundColor: Colors.blue,
    width: 350,
    height: 250,
    marginBottom: 23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
});
