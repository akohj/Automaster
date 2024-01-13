import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './bottom_tab_navigator';

const Stack = createNativeStackNavigator();

// export function UnauthenticatedUserStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="RegistrationScreen"
//         component={RegistrationScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

export function AuthenticatedUsersStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="SubMenuScreen"
        component={SubMenuScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SubProfileScreen"
        component={SubProfileScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
