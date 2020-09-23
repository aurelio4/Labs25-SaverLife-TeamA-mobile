import {
    GET_BUDGET,
    GET_NET_INCOME,
    GET_SPENDING_BAR,
    GET_SPENDING_DONUT,
    INCREASE_COUNTER,
    GET_DASHBOARD
  } from '../actionCreators/mainActions';
  
  const initialState = {
    currentMonthlySpending: {},
    futureBudget: {},
    counter: 0,
    data: {
      spendingBar: {},
      netIncome: {},
      spendingDonut: {},
    },
    dashboard: {
      transactions: [],
    },
    layout: {
      spendingBar: {},
      netIncome: {},
      spendingDonut: {},
    },
    user: {
      name: 'John Smith',
      email: 'jsmith@gmail.com',
      phone: '(414) 440-4140',
      password: 'qweasd',
      isEditing: false,
    },
  };
  
  export default mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BUDGET:
        return {
          ...state,
          futureBudget: action.futureBudget,
          currentMonthlySpending: action.currentSpending,
        };
      case GET_SPENDING_BAR:
        return {
          ...state,
          data: {
            ...state.data,
            spendingBar: action.data,
          },
          layout: {
            ...state.layout,
            spendingBar: {
              ...action.layout,
              width: 425,
              height: 630,
              font: {size: 10},
            },
          },
        };
      case GET_SPENDING_DONUT:
        return {
          ...state,
          data: {
            ...state.data,
            spendingDonut: action.data,
          },
          layout: {
            ...state.layout,
            spendingDonut: {
              ...action.layout,
              width: 450,
              height: 625,
              font: {size: 12},
              // title: 'Spending by Category for the Last Month',
              legend: { x: 0.25, y: 0.50 },
            },
          },
        };
      case GET_NET_INCOME:
        return {
          ...state,
          data: {
            ...state.data,
            netIncome: action.data,
          },
          layout: {
            ...state.layout,
            netIncome: {
              ...action.layout,
              width: 420,
              height: 650,
              font: {size: 12}
            },
          },
        };
      case INCREASE_COUNTER:
        return {
          ...state,
          counter: state.counter + 1
      };
      case GET_DASHBOARD:
        return {
          ...state,
          dashboard: action.payload,
      };
      default:
        return state;
    }
  };