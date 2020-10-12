import React, { Component } from "react";

export default class IconButton extends Component {
  render () {
		return (
      <>
        <td>
          <button 
            className="submitt-button"
            onClick={this.props.handleEdit}
          >Edit</button>
        </td>
        <td>
          <button
            className="submitt-button"
            onClick={this.props.handleDelete}
          >Delete</button>
        </td>
      </>
		)
	}
}
