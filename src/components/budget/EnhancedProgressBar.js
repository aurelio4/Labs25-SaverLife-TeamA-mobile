import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ProgressBar from 'react-native-progress/Bar';

const EnhancedProgressBar = props => {
  const categoryName = props.entry[0];
  const categoryGoal = props.entry[1];
  const categoryCurrent = props.spendingCurrent[categoryName];
  const percentFilled = (categoryCurrent / categoryGoal) * 1;

  const spendingStatus = () => {
    if (percentFilled < 0.6) {
      return '#33A74C';
    } else if (percentFilled < 0.9) {
      return '#FDBF2D';
    } else {
      return '#D93A4B';
    }
  };

  return (
    <View className="individualBar">
      <View className="progressHeader" >
        <Text style={styles.categoryName}>{categoryName}</Text>
        <Text className="progressP" style={styles.categoryStats}>{`Spent: $${(categoryCurrent + 0).toFixed(
          2
        )} | Remaining: $${(categoryGoal - categoryCurrent).toFixed(
          2
        )} | Goal: $${categoryGoal}`}</Text>
      </View>
      <ProgressBar progress={percentFilled} width={350} height={15} style={styles.progressBar} color={spendingStatus()} />
    </View>
  );
};

const styles = StyleSheet.create({
    barText: {
      flexDirection: 'row',
      justifyContent: "space-between",
      width: 350
    },
    categoryName: {
        fontSize: 17
    },
    categoryStats: {
        fontSize: 15,
        marginTop: 0,
        marginBottom: 2
    },
    progressBar: {
        marginBottom: 7
    }
  });

export default EnhancedProgressBar;