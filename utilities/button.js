import { StyleSheet, Pressable } from 'react-native';

import Text_ from './text';
import Icon from './icon';

export default function Button({ onPress, buttonStyle, children, buttonText, textContainer }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [buttonStyle, pressed && styles.pressed]}
    >
      <Text_ children={children} textStyle={[ styles.myButtonText, buttonText]} textContainer={textContainer} />
      <Icon/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed : {
   opacity: 0.9 
  },
  myButtonText:{
    fontWeight: 'bold',
    fontSize: 17
  }

});
