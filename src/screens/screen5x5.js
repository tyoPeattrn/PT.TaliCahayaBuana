import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Screen5x5 = ({route}) => {
  return (
    <View>
      <Text>Hello, 5x5 is here</Text>
      <View>
          <Text>{route.params.name}</Text>
      </View>

    </View>
  );
};

export default Screen5x5;

const styles = StyleSheet.create({});
