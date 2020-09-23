import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromIdToken } from '@okta/okta-react-native';



import SaverLifeApp from '../../SaverLifeApp'
import LoadingComponent from './LoadingComponent'
import BudgetPage from '../../pages/BudgetPage.js'
import ProfilePage from '../../pages/ProfilePage.js'
import PastSpendingPage from '../../pages/PastSpendingPage.js'
import DashboardPage from '../../pages/DashboardPage'
import NetIncomePage from '../../pages/NetIncomePage.js'
import PastSpendingBarPage from '../../pages/PastSpendingBarPage'
import PastSpendingDonutPage from '../../pages/PastSpendingDonutPage'
import GoalProgressBar from './GoalProgressBar'
import { NavigationContainer } from '@react-navigation/native';

// import Home from '../../icons/'

const Navbar = () => {
    const Tab = createBottomTabNavigator()
    // const [status, setStatus] = useState(false)
    // const [counter, setCounter] = useState(0)

    // useEffect(async() => {
    //     const current = await isAuthenticated()

    //     if (current.authenticated !== status) {
    //         setStatus(!status)
    //     }
    // }, [counter])

    // setTimeout(async () => {
    //     setCounter(counter + 1)
    // }, 1000)
    // const getUserIdToken = async () => {
    //     let user = await getUserFromIdToken();
    //     return JSON.stringify(user, null, 2)
    // }

    return (
        <>
            <GoalProgressBar />
            {/* <Text>{() => getUserIdToken()}</Text> */}
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#c01089',
                }}
            >
                {/* <Tab.Screen name="Profile" component={ProfilePage} /> */}
                <Tab.Screen name="DashBoard" component={DashboardPage} />
                <Tab.Screen name="Budget" component={BudgetPage} />
                <Tab.Screen name="Spend Bar" component={PastSpendingBarPage} />
                <Tab.Screen name="Spend Donut" component={PastSpendingDonutPage} />
                <Tab.Screen name="Net Income" component={NetIncomePage} />
                <Tab.Screen name="Account" component={SaverLifeApp} />
            </Tab.Navigator>
        </>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// })

export default Navbar