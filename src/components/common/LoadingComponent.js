import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

const styles = StyleSheet.create({
	loadingComponent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

function LoadingComponent(props) {
	return (
		<SafeAreaView style={styles.loadingComponent}>
			<View>
				<Text>{props.message}</Text>
			</View>
		</SafeAreaView>
	);
}

export default LoadingComponent;

LoadingComponent.propTypes = {
	message: PropTypes.string.isRequired,
};
