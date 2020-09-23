import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Plotly from 'react-native-plotly';

import { getSpendingDonutAction } from '../actionCreators/mainActions'

const PastSpendingDonutPage = () => {
    const dispatch = useDispatch();
    const spendingDonutData = useSelector(state => state.data.spendingDonut);
    const spendingDonutLayout = useSelector(state => state.layout.spendingDonut);

    useEffect(() => {
        dispatch(getSpendingDonutAction());
    }, []);

    return (
        // <View style={styles.background}>
            

        <View style={styles.container}>
            <Plotly data={spendingDonutData} config={{ displayModeBar: false }}
            layout={spendingDonutLayout}/>
        </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    // background: {
        
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // backgroundColor: 'white'
        
    // },
    container: {
        flex: 1,
        // paddingRight: 25,
        // height: '200%'
    }
})

export default PastSpendingDonutPage