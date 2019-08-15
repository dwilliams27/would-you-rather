import { RECEIVE_POLLS, POPULATE_POLL_LIST, TOGGLE_POLL_LIST } from '../actions/polls'

export default function polls (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        pollMasterList: action.polls
      };
    case POPULATE_POLL_LIST:
      return {
        ...state,
        pollList: action.pollList
      }
    case TOGGLE_POLL_LIST:
      return {
        ...state,
        showAnswered: !state.showAnswered
      }
    default:
      return state;
  } 
}