import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll from './Poll';

class PollList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswered: false,
      polls: []
    }
  }

  componentDidMount() {
    this.setState({
      polls: this.populateShowList(this.state.showAnswered)
    });
  }

  populateShowList(showAnswered) {
    if(!this.props.polls) {
      return [];
    }
    let show = [];
    const polls = this.props.polls;
    const user = this.props.users[this.props.authedUser];
    show = Object.keys(user.answers);
    if(!showAnswered) {
      let arr = Object.keys(this.props.polls).filter((poll) => {
        for(let i in show) {
          if(this.props.polls[poll].id === show[i]) {
            return false;
          }
        }
        return true;
      })
      show = arr;
    }
    return show;
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      showAnswered: !this.state.showAnswered,
      polls: this.populateShowList(!this.state.showAnswered)
    })
  }

  render() {
    return <div>
      <button onClick={this.toggle}>Toggle</button>
      {
        this.state.polls.map((poll) => (
          <Poll key={poll} id={poll} />
        ))
      }
    </div>
  }
}

function mapStateToProps({ polls, authedUser, users }) {
  return {
    polls,
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(PollList);