import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Screen4x4 = ({route}) => {
  return (
    <View>
      <Text>Hello, 4x4 is here</Text>
      <View>
          <Text>{route.params.name}</Text>
      </View>
    </View>
  );
};

export default Screen4x4;

const styles = StyleSheet.create({});
