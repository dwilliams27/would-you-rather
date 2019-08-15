import React, { Component } from 'react';
import { addQuestion } from '../actions/shared';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }
  handleChange1 = (e) => {
    const text = e.target.value

    this.setState(() => ({
      optionOneText: text,
      toHome: false
    }))
  }
  handleChange2 = (e) => {
    const text = e.target.value

    this.setState(() => ({
      optionTwoText: text,
      toHome: false
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(addQuestion({ optionOneText, optionTwoText }))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }))
  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3>Woudl you rather?</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Option 1"
            value={optionOneText}
            onChange={this.handleChange1}
            className='textarea'
          />
          <textarea
            placeholder="Option 2"
            value={optionTwoText}
            onChange={this.handleChange2}
            className='textarea'
          />
          <button
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)