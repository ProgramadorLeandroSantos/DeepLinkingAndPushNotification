import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../../screens';

const Stack = createNativeStackNavigator();

function MainRoutes() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="Cart" component={Screens.Cart} />
      </Stack.Navigator>
  );
}

export default MainRoutes;