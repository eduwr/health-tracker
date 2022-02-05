import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WeightSummary} from '../pages/WeightSummary';
import {Profile} from '../pages/Profile';

const Tab = createBottomTabNavigator();

export const Router = () => (
  <Tab.Navigator>
    <Tab.Screen name="WeightSummary" component={WeightSummary} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
