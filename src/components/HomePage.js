import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollList from './PollList'

class HomePage extends Component {
  render() {
    return <div>
      <div>HOME PAGE</div>
      <PollList />
    </div>
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(HomePage);