import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unsetAuthedUser, setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  componentDidMount() {
    this.props.dispatch(unsetAuthedUser());
  }
  
  loginAsUser = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(e.target.innerHTML))
  }

  render() {
    return <div className="dropdown">
      <button className="dropbtn">Select User</button>
      <div className="dropdown-content">
        {
          this.props.users && this.props.users.map((user) => (
            <button key={user} onClick={this.loginAsUser}>{user}</button>
          ))
        }
      </div>
    </div>
  }
}

function mapStateToProps({ users }) {
  let data = []
  Object.keys(users).map((key) => (
    data.push(key)
  ));
  return {
    users: data
  };
}

export default connect(mapStateToProps)(Login);