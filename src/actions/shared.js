import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { _getUsers, _getQuestions } from '../utils/_DATA'

export function loadUsers () {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    })
  }
}

export function loadPolls () {
  return (dispatch) => {
    return _getQuestions().then((polls) => {
      dispatch(receivePolls(polls));
    })
  }
}