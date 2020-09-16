import React from './node_modules/react'
import { ScrollView, Text, StyleSheet } from 'react-native'
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
        <>
            <Plotly data={spendingBarData} config={{ displayModeBar: false }}
            layout={spendingBarLayout}/>
            <Plotly data={spendingDonutData} config={{ displayModeBar: false }}
            layout={spendingDonutLayout}/>
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

export default PastSpendingPlots