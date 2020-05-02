const statistic = (state = [], action) => {
  switch (action.type) {
    case 'STATISTIC_GET_SUCCESS':
      return action.payload.statistic;
    case 'STATISTIC_GET_ERROR':
      return action.payload;
    case 'GET_STAT_ELEMENTS_COUNT_SUCCESS':
      return { ...state, ...action.payload };
    case 'GET_STAT_ELEMENTS_COUNT_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default statistic;
