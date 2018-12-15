
import { combineReducers } from 'redux';
import NonprofitReducer from './nonprofit';

const rootReducer = combineReducers({
  nonprofit: NonprofitReducer
});

export default rootReducer;