import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser';

class NavBar extends Component {
  links = [];
  style = {display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none'}
  
  constructor(props) {
    super(props);
    this.links.push({ label: "Home", to: "/"})
    this.links.push({ label: "New Question", to: "/add"})
    this.links.push({ label: "Leaderboard", to: "/leaderboard"})
  }

  logOut = (e) => {
    e.preventDefault();
    this.props.dispatch(unsetAuthedUser());
  }

  render() {
    return <ul>
      {this.links.map((link) => {
        return <li key={link.label}><Link to={link.to} style={this.style}>
         {link.label}
        </Link></li>
      })}
      <li>
        {this.props.authedUser !== null && <div style={this.style}>Logged in user: {this.props.authedUser}</div>}
      </li>
      <li>
        {this.props.authedUser !== null && <button onClick={this.logOut}>Log out</button>}
      </li>
    </ul>
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NavBar);