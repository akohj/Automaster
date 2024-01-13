import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';
import Text_ from '../../utilities/text';
import Button from '../../utilities/button';

export default function StartUp() {
  return (
    <View style={styles.container}>
      <Text_ children={'Welcome to Automaster'} textStyle={styles.loginText} />
      <Text_
        children={'"GOOD CARS GET YOU FORM POINT A TO B"'}
        textStyle={styles.extraText}
      />

      <Button buttonStyle={styles.buttonContainer} children={'Get Started'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: Colors.blue,
    width: 310,
    height: 50,
    marginTop: 555,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 13,
    color: Colors.blue,
    fontWeight: 'normal',
    marginVertical: 25,
  },
  extraText: {
    fontSize: 13,
    color: Colors.blue,
  },
});
