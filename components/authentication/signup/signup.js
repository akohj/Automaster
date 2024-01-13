import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Colors from '../../../constants/colors';
import Text_ from '../../../utilities/text';
import Input from '../../../utilities/input';
import Button from '../../../utilities/button';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text_ children={'Sign Up'} textStyle={styles.loginText} />
      <View style = {styles.inputContainer}>
        <Input placeholder={'Enter your Full Name'} />
        <Input placeholder={'Enter your E-mail'} />
        <Input placeholder={'Enter your Password'} />
        <Input placeholder={'Confirm your Password'} />
      </View>

      <Button buttonStyle={styles.buttonContainer} children={'Sign Up'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: Colors.blue,
    width: 310,
    height: 50,
    marginTop: 25,
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
  inputContainer: {
    height: 250,
  }
});
