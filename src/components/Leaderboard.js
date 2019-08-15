import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    const sorted = Object.keys(this.props.users).sort((a, b) => ((this.props.users[b].questions.length + Object.keys(this.props.users[b].answers).length) - (this.props.users[a].questions.length + Object.keys(this.props.users[a].answers).length)));
    return <div>
      <div>Leaderboard</div>
      <ul>
        {
          sorted.map((id) => (
            <li key={id} style={{borderStyle: "solid", float: "none"}}>
              <div>Name: {this.props.users[id].name}</div>
              <div>
                <img src={this.props.users[id].avatarURL} style={{width:'150px', height:'150px'}} alt={this.props.users[id].name}/>
              </div>
              <div>Number of questions: {this.props.users[id].questions.length}</div>
              <div>Number of questions answered: {Object.keys(this.props.users[id].answers).length}</div>
            </li>
          ))
        }
      </ul>
    </div>
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);