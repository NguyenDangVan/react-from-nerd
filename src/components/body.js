import React, { Component } from 'react';
import LeftMenu from '../components/left_menu';
import RightMenu from '../components/right_menu';
import '../stylesheets/body.css';

class Body extends Component {
  constructor(props) {
    super(props)
  }

  render () {
		return (
			<div className='body-component'>
				<LeftMenu />
				<RightMenu />
			</div>
		);
	}
}

export default Body;
