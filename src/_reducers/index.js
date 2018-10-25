import { combineReducers } from 'redux';
import { authentication, accountsInfo } from './reducers';

const rootReducer = combineReducers({
  authentication,
  accountsInfo
})

export default rootReducer
