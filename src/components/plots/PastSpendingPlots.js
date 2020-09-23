import React from './node_modules/react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from './node_modules/react-redux';
import Plotly from './node_modules/react-native-plotly';

import { getSpendingBarAction, getSpendingDonutAction } from '../../actionCreators/mainActions'


const PastSpendingPlots = () => {
    const dispatch = useDispatch();
    const spendingBarData = useSelector(state => state.data.spendingBar);
    const spendingBarLayout = useSelector(state => state.layout.spendingBar);
    const spendingDonutData = useSelector(state => state.data.spendingDonut);
    const spendingDonutLayout = useSelector(state => state.layout.spendingDonut);

    useEffect(() => {
        dispatch(getSpendingBarAction());
        dispatch(getSpendingDonutAction());
    }, []);
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
        <Plotly data={spendingBarData} config={{ displayModeBar: false }}
            layout={{...spendingBarLayout}} />
        </View>
        <View style={styles.container}>
        <Plotly data={spendingDonutData} config={{ displayModeBar: false }}
            layout={spendingDonutLayout} />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // margin: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black'
    }
})

export default PastSpendingPlots