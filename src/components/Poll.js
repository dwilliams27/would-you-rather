import React, { Component } from 'react';
import { connect } from 'react-redux';

class Poll extends Component {
  render() {
    return <div>
      {"Poll author: " + this.props.poll.author}
      <img src={this.props.users[this.props.poll.author]} />
      <div>{"Option 1: " + this.props.poll.optionOne.text}</div>
      <div>{"Option 2: " + this.props.poll.optionTwo.text}</div>
    </div>
  }
}

function mapStateToProps({ polls, users }, { id }) {
  return {
    poll: polls[id],
    users
  };
}

export default connect(mapStateToProps)(Poll);