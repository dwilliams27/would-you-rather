import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Poll extends Component {
  render() {
    return <div>
      <div>{"Poll author: " + this.props.poll.author}</div>
      <img src={this.props.users[this.props.poll.author].avatarURL} style={{width:'150px', height:'150px'}} alt={this.props.users[this.props.poll.author].name}/>
      <div>{"Option 1: " + this.props.poll.optionOne.text}</div>
      <div>{"Option 2: " + this.props.poll.optionTwo.text}</div>
      <Link to={`/questions/${this.props.poll.id}`} style={{color: 'white'}}>{this.props.seeDetails ? "See details" : "Vote!"}</Link>
    </div>
  }
}

function mapStateToProps({ polls, users }, { id }) {
  return {
    poll: polls.pollMasterList[id],
    users
  };
}

export default connect(mapStateToProps)(Poll);