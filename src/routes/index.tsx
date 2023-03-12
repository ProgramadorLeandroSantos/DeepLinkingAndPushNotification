import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoutes from './main';
import { services } from '../services';


export default function Routes() {

  return (
    <NavigationContainer linking={services.linking}>
      <MainRoutes />
    </NavigationContainer>
  );
}