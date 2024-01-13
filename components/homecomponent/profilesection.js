import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Icon from '../../utilities/icon';
import Colors from '../../constants/colors';
import Text_ from '../../utilities/text';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Icon
        icon="ios-person-circle-sharp"
        size={200}
        color={Colors.lightGray}
      />
      <Text_ children={'Full name'}  textStyle={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
