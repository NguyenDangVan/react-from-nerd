import React, { Component } from 'react';

class Category extends Component {
  render () {
		return (
			<a
				className="Category-link"
				href={this.props.link}
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React: {this.props.name}
			</a>
		);
	}
}

export default Category;
