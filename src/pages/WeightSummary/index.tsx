import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootTabNavigationProps} from '../../routes/types';

export const WeightSummary = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<RootTabNavigationProps<'WeightSummary'>>();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#c4c4c4' : 'e3e3e3',
  };

  const weight = 0;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? '#c4c4c4' : 'e3e3e3',
          }}>
          <Text>Insert your weight</Text>
          <Text>Val: {weight}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            // save weight
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('WeightNew');
        }}>
        <Text>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
