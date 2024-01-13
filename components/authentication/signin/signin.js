import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Colors from '../../../constants/colors';
import Text_ from '../../../utilities/text';
import Input from '../../../utilities/input';
import Button from '../../../utilities/button';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text_ children={'Sign In'} textStyle={styles.loginText} />

      <Input placeholder={'Enter your E-mail'} />
      <Input placeholder={'Enter your Password'} />
      <Button buttonText={styles.buttonText} children={'Forgot Password ?'} />
      <Button buttonStyle={styles.buttonContainer} children={'Sign In'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
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
    marginBottom: 20,
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
});
