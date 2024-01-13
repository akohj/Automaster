import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable,View, Image } from 'react-native';

import Icon from './icon';
import Text_ from './text';

export default function CarButton({
  onPress,
  buttonStyle,
  children,
  buttonText,
  textContainer,
  image,
}) {
  const my_image =
    require('./../logos/eren-yeager-5120x2880-11270.jpg');
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [buttonStyle, pressed && styles.pressed]}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={{ uri: './../logos/eren-yeager-5120x2880-11270.jpg' }} />
      </View>

      <Text_
        children={children}
        textStyle={[styles.myButtonText, buttonText]}
        textContainer={textContainer}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 150,
    width: 150,
    borderWidth: 1,
  },
  logo: {
    height: 100,
    width: 100,
  },
});
