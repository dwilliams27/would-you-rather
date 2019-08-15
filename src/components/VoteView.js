import React, { Component } from 'react';
import { connect } from 'react-redux';
import { vote } from '../actions/shared';

class VoteView extends Component {
  vote = (e) => {
    if(e.target.innerHTML === "VOTE OPTION 1") {
      this.props.dispatch(vote(this.props.authedUser, this.props.poll.id, "optionOne"))
    } else {
      this.props.dispatch(vote(this.props.authedUser, this.props.poll.id, "optionTwo"))
    }
  }

  render() {
    if(this.props.poll === null) {
      return <div>404, page not found</div>
    }
    let totalVotedFor = 0;
    let total = 0;
    for(let user in this.props.users) {
      if(this.props.users[user].answers[this.props.poll.id]) {
        total += 1.0
      }
      if(this.props.users[user].answers[this.props.poll.id] === this.props.loggedInUser.answers[this.props.poll.id]) {
        totalVotedFor += 1;
      }
    }
    const percentage = totalVotedFor/total;
    const votedForOne = this.props.loggedInUser.answers[this.props.poll.id] === 'optionOne'
    return <div>
      <div>Would you rather</div>
      <img src={this.props.image} style={{width:'150px', height:'150px'}} alt={this.props.image}/>
      {this.props.loggedInUser.answers[this.props.poll.id] 
        ? <div>
          <div>
            <div>{votedForOne 
              ? `OPTION 1 (Your Vote): ${this.props.poll.optionOne.text}`
              : `OPTION 1: ${this.props.poll.optionOne.text}`}</div>
            <div>
              {`Total votes: ${votedForOne ? totalVotedFor : total-totalVotedFor}`}
            </div>
            <div>
              {`Percentage votes: ${(votedForOne ? percentage : 1-percentage)*100}%`}
            </div>
          </div>
          <div>------------</div>
          <div>
            <div>{!votedForOne 
              ? `OPTION 2 (Your Vote): ${this.props.poll.optionTwo.text}`
              : `OPTION 2: ${this.props.poll.optionTwo.text}`}</div>
            <div>
              {`Total votes: ${!votedForOne ? totalVotedFor : total-totalVotedFor}`}
            </div>
            <div>
              {`Percentage votes: ${(!votedForOne ? percentage : 1-percentage)*100}%`}
            </div>
          </div>
        </div>
        : <div>
            <div>
              <div>{`Option 1: ${this.props.poll.optionOne.text}`}</div>
              <button onClick={this.vote}>VOTE OPTION 1</button>
            </div>
            <div>
              <div>{`Option 2: ${this.props.poll.optionTwo.text}`}</div>
              <button onClick={this.vote}>VOTE OPTION 2</button>
            </div>
          </div>
      }
    </div>
  }
}

function mapStateToProps({ polls, users, authedUser }, props) {
  const id = props.match.params.id.substr(1)
  if(!polls.pollMasterList[id]) {
    return {
      poll: null,
      image: null,
      loggedInUser: null,
      authedUser,
      users
    }
  }
  return {
    poll: polls.pollMasterList[id],
    image: users[polls.pollMasterList[id].author].avatarURL,
    loggedInUser: users[authedUser],
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(VoteView);