import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';

import Colors from '../constants/colors';

export default function Input({
  extraStyle,
  value,
  secureTextEntry,
  maxLength,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  placeholder,
  placeholderTextColor,
  onChangeText,
  multiLine,
  textInputStyle,
}) {
  return (
    <View style={[styles.inputContainer, extraStyle]}>
      <TextInput
        value={value}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        multiLine={multiLine}
        style={[styles.textInputContainer, textInputStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    width: 310,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 30,
    paddingHorizontal: 20
  },
  inputContainer: { flex: 1 },
});
