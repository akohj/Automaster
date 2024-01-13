import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../utilities/button';
import Colors from '../../constants/colors';

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <Button buttonStyle={styles.buttonContainer} children={'Contact us'} />
      <Button buttonStyle={styles.buttonContainer} children={'App Mode'} />
      <Button
        buttonStyle={styles.buttonContainer}
        children={'Share Blueskye Automaster'}
      />
      <Button
        buttonStyle={styles.buttonContainer}
        children={'Delete my account'}
      />
      <Button
        buttonStyle={styles.buttonContainer}
        children={'Change Language'}
      />
      <Button
        buttonStyle={styles.buttonContainer}
        children={'Terms of use and privacy policy'}
      />
      <Button
        buttonText={styles.buttonText2}
        buttonStyle={styles.buttonContainer2}
        children={'Logout'}
      />
      <Button
        buttonText={styles.buttonText}
        buttonStyle={styles.buttonContainer2}
        children={'Rate us'}
      />
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
  buttonContainer: {
    backgroundColor: Colors.blue,
    width: 350,
    height: 60,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonContainer2: {
    width: 310,
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    color: Colors.blue,
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 15,
    color: Colors.red,
    fontWeight: 'bold',
  },
});
