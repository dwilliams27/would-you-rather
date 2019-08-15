import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

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

export function addQuestion (question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({...question, author: authedUser}).then(() => {
      _getUsers().then((users) => {
        dispatch(receiveUsers(users));
      })
      _getQuestions().then((polls) => {
        dispatch(receivePolls(polls));
      })
    })
  }
}

export function vote(authedUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
      _getUsers().then((users) => {
        dispatch(receiveUsers(users));
      })
      _getQuestions().then((polls) => {
        dispatch(receivePolls(polls));
      })
    });
  }
}