import axios from 'axios';

// import getEmail from '../utils/getEmail';

export const GET_BUDGET = 'get_budget';
export const GET_NET_INCOME = 'get_net_income';
export const GET_SPENDING_BAR = 'get_spending_bar';
export const GET_SPENDING_DONUT = 'get_spending_donut';
export const INCREASE_COUNTER = 'increase_counter'
export const GET_DASHBOARD = 'get_dashboard';

// const userEmail = getEmail();

export const getBudgetAction = () => dispatch => {
  const userEmail = 'llama001@maildrop.cc'
  let futureBudget = {};
  let currentSpending = {};
  // console.log(userEmail);
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/future_budget', {
      user_id: userEmail,
      monthly_savings_goal: 50,
      placeholder: 'banjo',
    })
    .then(response => {
      // console.log(response.data)
      futureBudget = response.data;
      categories = Object.keys(response.data);
      // console.log(categories);
      // console.log('request complete');
      axios
        .post(
          `https://saverlife-a-api.herokuapp.com/data/current_month_spending/${userEmail}`,
          { categories }
        )
        .then(response => {
          // console.log(response.data)
          currentSpending = response.data;
          dispatch({ type: GET_BUDGET, futureBudget, currentSpending });
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getSpendingBarAction = () => dispatch => {
  const userEmail = 'llama001@maildrop.cc'
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/spending', {
      user_ID: userEmail,
      graph_type: 'bar',
      time_period: 'week',
    })
    .then(response => {
      console.log(JSON.parse(response.data).data, JSON.parse(response.data).layout)
      dispatch({
        type: GET_SPENDING_BAR,
        data: JSON.parse(response.data).data,
        layout: JSON.parse(response.data).layout,
      });
    });
};

export const getSpendingDonutAction = () => dispatch => {
  const userEmail = 'llama001@maildrop.cc'
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/spending', {
      user_ID: userEmail,
      graph_type: 'pie',
      time_period: 'month',
    })
    .then(response => {
      dispatch({
        type: GET_SPENDING_DONUT,
        data: JSON.parse(response.data).data,
        layout: JSON.parse(response.data).layout,
      });
    });
};

export const getNetIncomeAction = () => dispatch => {
  const userEmail = 'llama001@maildrop.cc'
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/moneyflow', {
      user_ID: userEmail,
      time_period: 'month',
    })
    .then(response => {
      dispatch({
        type: GET_NET_INCOME,
        data: JSON.parse(response.data).data,
        layout: JSON.parse(response.data).layout,
      });
    });
};

export const increaseCounter = () => {
  dispatch({type: INCREASE_COUNTER})
}
export const getDashboard = () => dispatch => {
  // const user_id = getEmail();
  const userEmail = 'llama001@maildrop.cc'
  axios
    .get(`https://saverlife-a-api.herokuapp.com/data/dashboard/${userEmail}`)
    .then(response => {
      let parsed = JSON.parse(response.data);
      const payload = {
        transactions: JSON.parse(parsed[0]),
        spendEarnRatio: parsed[1].spend_earn_ratio,
        account_type: parsed[2].account_type,
        current_balance: parsed[3].current_balance,
      };
      let objectTransactions = [];
      let index = 0;
      let dateTime = new Date();
      const weekAgo = new Date().getTime() - 604800000;
      // get only transactions from the last week
      while (dateTime.getTime() >= weekAgo) {
        let expandedDate = Object.values(payload.transactions.Date[index])
          .join('')
          .split('/');
        dateTime = new Date(
          '20' + expandedDate[2],
          Number(expandedDate[0]) - 1,
          expandedDate[1]
        );
        let fullTransaction = {
          amount: Object.values(payload.transactions['Amount($)'])[
            index
          ].toFixed(2),
          category: Object.values(payload.transactions.Category[index]).join(
            ''
          ),
          date: Object.values(payload.transactions.Date[index]).join(''),
        };
        objectTransactions.push(fullTransaction);
        index++;
      }
      // for (let index = 0; index < 100; index++) {
      //   let expandedDate = Object.values(payload.transactions.Date[index]).join('').split('/')
      //   let dateTime = new Date('20'+expandedDate[2], Number(expandedDate[0])-1, expandedDate[1])
      //   let fullTransaction = {
      //     amount: Object.values(payload.transactions['Amount($)'])[0],
      //     category: Object.values(payload.transactions.Category[index]).join(''),
      //     date: dateTime
      //   }
      //   objectTransactions.push(fullTransaction)
      // }
      // Object.values(payload.transactions.Date).forEach((transaction, index) => {
      //   let fullTransaction = {
      //     // amount: Object.values(payload.transactions['Account($)'])[index],
      //     category: Object.values(payload.transactions.Category[index]),
      //     date: Object.values(payload.transactions.Date[index])
      //   }
      //   objectTransactions.push(fullTransaction)
      // })
      // console.log(objectTransactions)
      payload.transactions = objectTransactions;
      // console.log(Object.values(payload.transactions.Category[0]).join(''))
      // console.log(Object.values(payload.transactions.Date));
      // console.log(Object.values(payload.transactions['Amount($)'])[0]);
      // console.log(payload);
      // const today = new Date().getTime()
      // console.log(today)
      dispatch({ type: GET_DASHBOARD, payload });
    });
};