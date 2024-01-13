import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Car from './screens/car';
import Settings from './screens/settings';

import Registration from './screens/registration';
import { AuthenticatedUsersStackNavigator } from './appcomponents/stack_navigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Car />
      {/* <NavigationContainer>
        <AuthenticatedUsersStackNavigator />
      </NavigationContainer> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e4e6',
  },
});
