import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '../utilities/icon';


import Home from '../screens/home';
import Car from '../screens/car';
import Settings from '../screens/settings';
import Colors from '../constants/colors';

const BottomTabs = createBottomTabNavigator();


export default function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: Platform.select({ ios: 80, android: 70 }),
          marginBottom: Platform.select({ ios: 20, android: 10 }),
          paddingBottom: Platform.select({ ios: 10, android: 10 }),
          paddingTop: Platform.select({ ios: 0, android: 10 }),
          marginHorizontal: 10,
          borderRadius: 20,
          paddingVertical: Platform.select({ ios: 10, android: 0 }),
          elevation: 3,
          shadowColor: Colors.gray,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          backgroundColor: Colors.blue,
        },
        headerStyle: {
          elevation: 0,
          height: Platform.select({ ios: 100, android: 70 }),
        },
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              icon={focused ? 'home-sharp' : 'home-outline'}
              size={35}
              color={Colors.white}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Car"
        component={Car}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              icon={focused ? 'car-sport' : 'car-sport-outline'}
              size={35}
              color={Colors.white}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              icon={focused ? 'settings' : 'settings-outline'}
              size={35}
              color={Colors.white}
            />
          ),
          headerShown: false, 
        }}
      />
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  darkModeText: {
    color: Colors.darkModeText,
  },
});
