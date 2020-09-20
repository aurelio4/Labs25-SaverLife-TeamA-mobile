import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const styles = StyleSheet.create({
	bar: {
		height: 30,
		alignItems: 'center',
		elevation: 4,
		marginTop: 10,
		paddingBottom: 10,
	},
});

const GoalProgressBar = () => {
	return (
		<SafeAreaView>
			<View style={styles.bar}>
				<ProgressBar progress={0.3} width={350} height={10} color='#c01089' />
			</View>
		</SafeAreaView>
	);
};

export default GoalProgressBar;
