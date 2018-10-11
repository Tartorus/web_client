import { combineReducers } from 'redux';
import { authentication, accounts } from './reducers';

const rootReducer = combineReducers({
  authentication,
  accounts
})

export default rootReducer
