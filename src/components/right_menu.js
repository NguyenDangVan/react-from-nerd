import React, { Component } from 'react';

export default class RightMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div className='right-menu'>
        <h3>Edit movie</h3>
        <div className='form-edit'>
          <span className='form-title'>Movie name:</span><input type='text' className='input_movie' /><br/>
          <span className='form-title'>Country:</span><input type='text' className='input_country' />
        </div>

        <div className='form-button'>
          <button type='submit' className='edit_form-cancel'>Cancel</button>
          <button type='submit' className='edit_form-cancel'>Submit</button>
        </div>
      </div>
    )
  }
}
