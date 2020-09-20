/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SaverLifeApp from '../../SaverLifeApp';
import BudgetPage from '../../pages/BudgetPage.js';
import PastSpendingPage from '../../pages/PastSpendingPage.js';
import NetIncomePage from '../../pages/NetIncomePage.js';
import GoalProgressBar from './GoalProgressBar';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Navbar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <GoalProgressBar />
      <Tab.Navigator
		tabBarOptions={{ activeTintColor:'#c01089', inactiveTintColor: '#ecb7db' }}>
		<Tab.Screen name="Home" component={SaverLifeApp} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => ( <Ionicons name="home" size={20} color={color} /> ) }} />
        <Tab.Screen name="Budget" component={BudgetPage} options={{ tabBarLabel: 'Budget', tabBarIcon: ({ color }) => ( <Ionicons name="bar-chart" size={20} color={color} /> ) }} />
        <Tab.Screen name="Past Spending" component={PastSpendingPage} options={{ tabBarLabel: 'Past Spending', tabBarIcon: ({ color }) => ( <Ionicons name="pie-chart" size={20} color={color} /> ) }} />
        <Tab.Screen name="Net Income" component={NetIncomePage} options={{ tabBarLabel: 'Net Income', tabBarIcon: ({ color }) => ( <Ionicons name="stats-chart" size={20} color={color} /> ) }} />
      </Tab.Navigator>
    </>
  );
};

export default Navbar;
