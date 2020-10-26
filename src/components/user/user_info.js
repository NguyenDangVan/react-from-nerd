import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class UserInfo extends Component {
  state = { id: null, isHover: false };

  handleHoverOn = (id) => {
    this.setState({id: id, isHover: true});
  }

  handleHoverOff = (id) => {
    this.setState({id: id, isHover: false});
  }

  renderEditButton = (id) => {
    const { isEdit, isCancel } = this.props;
    if (!isCancel && isEdit) {return null}

    return <div>
      <span onClick={() => this.props.handleEdit(id)}>
        <FontAwesomeIcon className="faicons" icon="edit"/>
      </span>
    </div>
  }

  renderDeleteButton = (id) => {
    const { isEdit, isCancel } = this.props;
    if (!isCancel && isEdit) {return null}
      
    return <div>
      <span onClick={() => this.props.handleDelete(id)}>
        <FontAwesomeIcon className="faicons" icon="trash"/>
      </span>
    </div>
  }

  render () {
    const { user, index } = this.props;
		return (
      <tr key={`user-${index}`}
        onMouseEnter={() => this.handleHoverOn(user.id)}
        onMouseLeave={() => this.handleHoverOff(user.id)}
      >
        <td className="name">{user.name}</td>
        <td className="email">{user.email}</td>
        <td>{this.state.isHover ? this.renderEditButton(user.id) : null}</td>
        <td>{this.state.isHover ? this.renderDeleteButton(user.id) :null}</td>
      </tr>
		)
	}
}
