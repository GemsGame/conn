import { combineReducers } from 'redux';
import authentication from './authentication';
import registration from './registration';
import statistic from './statistic';
import balance from './balance';
import messages from './messages';
import projects from './projects';

const rootReducer = combineReducers({
  authentication,
  registration,
  statistic,
  balance,
  messages,
  projects,
});

export default rootReducer;
