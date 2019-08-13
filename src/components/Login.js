import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        {
          this.props.users.map((user) => (
            <a key={user.id} href="#">{user.name}</a>
          ))
        }
      </div>
    </div>
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login);