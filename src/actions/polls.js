export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const TOGGLE_POLL_LIST = 'TOGGLE_POLL_LIST';
export const POPULATE_POLL_LIST = 'POPULATE_POLL_LIST';
export const ADD_QUESTION_POLE = 'ADD_QUESTION_POLE';

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

export function addQuestionPole (question) {
  return {
    type: ADD_QUESTION_POLE,
    question
  }
}

export function togglePollList () {
  return {
    type: TOGGLE_POLL_LIST
  }
}

export function populatePollList(pollList) {
  return {
    type: POPULATE_POLL_LIST,
    pollList
  }
}