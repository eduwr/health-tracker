import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {WeightSummary} from '../pages/WeightSummary';
import {Profile} from '../pages/Profile';
import {WeightNew} from '../pages/WeightNew';
import type {TabParamList, RootStackParamList} from './types';

const RootStack = createStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<TabParamList>();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Group>
      <Tab.Screen name="WeightSummary" component={WeightSummary} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Group>
  </Tab.Navigator>
);

export const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen name="Main" component={Tabs} />
    <RootStack.Group screenOptions={{presentation: 'modal'}}>
      <Tab.Screen name="WeightNew" component={WeightNew} />
    </RootStack.Group>
  </RootStack.Navigator>
);
