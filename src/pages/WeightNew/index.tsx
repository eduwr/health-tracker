import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export const WeightNew = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};
