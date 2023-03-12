import React from 'react';

import {
  Button,
  Linking,
  Text,
  View,
} from 'react-native';

function Home(): JSX.Element {

  return (
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Home</Text>
        <Button title='OPEN PHONE' onPress={() => Linking.openURL('tel:+123456789')} />
      </View>
  );
}

export default Home;