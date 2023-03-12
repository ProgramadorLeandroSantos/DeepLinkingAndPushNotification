import React from 'react';

import {
  Button,
  Linking,
  Text,
  View,
} from 'react-native';

function Cart(): JSX.Element {

  return (
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Cart</Text>
        <Button title='OPEN SMS' onPress={() => Linking.openURL('SMS:+123456789')} />
      </View>
  );
}

export default Cart;