import { combineReducers } from 'redux';
import authentication from './authentication';
import registration from './registration';
import statistic from './statistic';
import balance from './balance';
import messages from './messages';

const rootReducer = combineReducers({
  authentication,
  registration,
  statistic,
  balance,
  messages,
});

export default rootReducer;
