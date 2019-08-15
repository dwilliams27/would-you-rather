import React, { Component } from 'react';
import { loadUsers, loadPolls } from '../actions/shared';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Leaderboard from './Leaderboard';
import VoteView from './VoteView';
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadUsers())
    this.props.dispatch(loadPolls())
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        {this.props.authedUser === null
          ? <Login />
          : <div>
              <Route path='/' exact component={HomePage} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/questions/:id' component={VoteView} />
              <Route path='/add' exact component={NewQuestion} />
            </div>}
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
