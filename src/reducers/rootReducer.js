import { combineReducers } from 'redux';
import authentication from './authentication';
import registration from './registration';
import statistic from './statistic';

const rootReducer = combineReducers({
  authentication,
  registration,
  statistic,
});

export default rootReducer;
