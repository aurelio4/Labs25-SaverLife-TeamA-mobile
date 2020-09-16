import React from 'react'
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SaverLifeApp from '../../SaverLifeApp'
import LoadingComponent from './LoadingComponent'
import BudgetPage from '../../pages/BudgetPage.js'
import PastSpendingPage from '../../pages/PastSpendingPage.js'
import NetIncomePage from '../../pages/NetIncomePage.js'
import GoalProgressBar from './GoalProgressBar'

const Navbar = () => {
    const Tab = createBottomTabNavigator()

    return (
        
        <>
            <GoalProgressBar />
            <Tab.Navigator>
                <Tab.Screen name="Home" component={SaverLifeApp} />
                <Tab.Screen name="Budget" component={BudgetPage} />
                <Tab.Screen name="Past Spending" component={PastSpendingPage} />
                <Tab.Screen name="NetIncome" component={NetIncomePage} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Navbar