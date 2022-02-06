import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Screen3x3 = ({route}) => {
  return (
    <View>
      <Text>Hello, 3x3 is here</Text>
      <View>
          <Text>{route.params.name}</Text>
      </View>
    </View>
  );
};

export default Screen3x3;

const styles = StyleSheet.create({});
