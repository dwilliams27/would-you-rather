import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePollList } from '../actions/polls';
import Poll from './Poll';
import { populatePollList } from '../actions/polls';

class PollList extends Component {
  componentDidMount() {
    this.populateShowList();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.showAnswered !== this.props.showAnswered || Object.keys(prevProps.polls.pollMasterList).length !== Object.keys(this.props.polls.pollMasterList).length) {
      this.populateShowList();
    }
  }

  populateShowList() {
    if(!this.props.polls) {
      return [];
    }
    let show = [];
    const polls = this.props.polls.pollMasterList;
    const user = this.props.users[this.props.authedUser];
    show = Object.keys(user.answers);
    if(!this.props.showAnswered) {
      let arr = Object.keys(polls).filter((poll) => {
        if(poll )
        for(let i in show) {
          if(polls[poll].id === show[i]) {
            return false;
          }
        }
        return true;
      })
      show = arr;
    }
    this.props.dispatch(populatePollList(show))
  }

  toggle = (e) => {
    e.preventDefault();
    this.props.dispatch(togglePollList());
  }

  render() {
    const text = (a) => a ? "Answered Questions" : "Unanswered Questions"
    return <div>
      <h2>{text(this.props.showAnswered)}</h2>
      <button onClick={this.toggle}>{`Show ${text(!this.props.showAnswered)}`}</button>
      <ul>
        {
          this.props.polls.pollList && this.props.polls.pollList.map((poll) => (
            <li key={poll} style={{float: "none", borderStyle: "solid"}}>
              <Poll id={poll} seeDetails={this.props.showAnswered}/>
            </li>
          ))
        }
      </ul>
    </div>
  }
}

function mapStateToProps({ polls, authedUser, users }) {
  return {
    polls,
    authedUser,
    users,
    showAnswered: polls.showAnswered
  };
}

export default connect(mapStateToProps)(PollList);