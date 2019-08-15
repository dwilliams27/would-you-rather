export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const TOGGLE_POLL_LIST = 'TOGGLE_POLL_LIST';
export const POPULATE_POLL_LIST = 'POPULATE_POLL_LIST';

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls
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