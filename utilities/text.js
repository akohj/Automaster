import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

export default function Text_({ children, textContainer, textStyle }) {
  return (
    <View style={[styles.defaultTextContainer, textContainer]}>
      <Text style={[styles.defaultText, textStyle]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultTextContainer: {},
  defaultText: { fontSize: 15, fontWeight: 'normal', color: Colors.black },
});
