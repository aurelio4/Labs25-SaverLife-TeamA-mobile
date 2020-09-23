import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class TransactionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Category', 'Amount in USD'],
      tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
      ]
    }
  }
  
  async populateData () {
    
  }
  componentDidMount() {
      console.log('MOunt', this.props.transactions)
    //   console.log('Update', this.props.transactions)
      let newData = []
      console.log('pop',this.props.transactions)
      this.props.transactions.forEach(transaction => (
        // console.log(transaction)
          newData.push([transaction.date, transaction.category, transaction.amount])
      ))
      this.setState({
          tableHead: ['Date', 'Category', 'Amount in USD'],
          tableData: newData
      
      })
  }
//   async componentDidUpdate(prevProps, prevState) {
//       if (prevProps !== this.props){
//         console.log('Update', this.props.transactions)
//         let newData = []
//         console.log('pop',this.props.transactions)
//         this.props.transactions.forEach(transaction => (

//             newData.push[transaction.date, transaction.category, transaction.amount]
//         ))
//         this.setState({
//             tableHead: ['Date', 'Category', 'Amount in USD'],
//             tableData: newData
        
//         })
//       }
//   }
 
  render() {
    const state = this.state;
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
        <Text>{this.props.transactions.date} </Text>
        <Text style={{marginLeft: 95, fontSize: 20, marginBottom: 15}}>Last Week's Transactions</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{width: 375}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});