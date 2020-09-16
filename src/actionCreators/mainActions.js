import axios from 'axios';

// import getEmail from '../utils/getEmail';

export const GET_BUDGET = 'get_budget';
export const GET_NET_INCOME = 'get_net_income';
export const GET_SPENDING_BAR = 'get_spending_bar';
export const GET_SPENDING_DONUT = 'get_spending_donut';

// const userEmail = getEmail();
const userEmail = 'llama001@maildrop.cc'

export const getBudgetAction = () => dispatch => {
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
      // console.log('request complete');
      axios
        .get(
          `https://saverlife-a-api.herokuapp.com/data/current_month_spending/${userEmail}`
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
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/spending', {
      user_ID: userEmail,
      graph_type: 'bar',
      time_period: 'week',
    })
    .then(response => {
      dispatch({
        type: GET_SPENDING_BAR,
        data: JSON.parse(response.data).data,
        layout: JSON.parse(response.data).layout,
      });
    });
};

export const getSpendingDonutAction = () => dispatch => {
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