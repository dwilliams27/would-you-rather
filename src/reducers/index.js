import { combineReducers } from 'redux';
import users from './users';
import authedUser from './authedUser';
import polls from './polls';

export default combineReducers({
  users,
  polls,
  authedUser
})