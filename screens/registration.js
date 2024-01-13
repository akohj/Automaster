import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from '../components/authentication/signin/signin';
import SignUp from '../components/authentication/signup/signup';
import StartUp from '../components/startuppage/startup';

import Button from '../utilities/button';
import Colors from '../constants/colors';

export default function Registration() {
  return (
    <View style={styles.container}>
      <View style={styles.regTab}>
        <Button buttonStyle={styles.signStyle} children={'Sign In'} />
        <Button buttonStyle={styles.signStyle_2} children={'Sign Up'} />
      </View>
      <Sign />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  regTab: {
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  signStyle: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: Colors.blue,
  },
  signStyle_2: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
