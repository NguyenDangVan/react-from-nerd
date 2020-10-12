import React, { Component } from "react";
import IconButton from "./icon_button";

export default class UserInfo extends Component {
  render () {
    const {
      isEdit, focusUserId,
      handleEdit, handleDelete} = this.props

		return (
			<tbody>
        {this.props.users.map(user =>
          <tr key={user.id} onMouseOver={() => this.props.handleHonverOn(user.id)}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            {!isEdit && user.id === focusUserId &&
              <IconButton handleEdit={handleEdit} handleDelete={() => this.props.handleDelete(user.id)}/>}
          </tr>
        )}
      </tbody>
		)
	}
}
