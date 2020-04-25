function mergeRecursive(obj1, obj2) {

  for (const p in obj2) {
    try {
    // Property in destination object set; update its value.
      if (obj2[p].constructor == Object) {
        obj1[p] = mergeRecursive(obj1[p], obj2[p]);
      } else {
        obj1[p] = obj2[p];
      }
    } catch (e) {
    // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];
    }
  }

  return obj1;
}


const statistic = (state = [], action) => {
  switch (action.type) {
    case 'STATISTIC_GET_SUCCESS':
      return action.payload.statistic;
    case 'STATISTIC_GET_ERROR':
      return action.payload;

    case 'GET_STAT_ELEMENTS_COUNT_SUCCESS':
      return {...state, ...action.payload};
    case 'GET_STAT_ELEMENTS_COUNT_ERROR':
      return action.payload;
    default:
      return state;
  }
};



export default statistic;
