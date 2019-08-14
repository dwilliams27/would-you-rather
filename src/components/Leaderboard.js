import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    const sorted = Object.keys(this.props.users).sort((a, b) => (this.props.users[a].questions.length + Object.keys(this.props.users[a].answers).length) - (this.props.users[b].questions.length + Object.keys(this.props.users[b].answers).length));
    console.log(sorted);
    return <div>
      Leaderboard
    </div>
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);