import React, { Component } from "react";
import UserInfo from "./user_info";
import "../../stylesheets/user_list.css";

export default class UserList extends Component {
  render () {
		return (
			<table>
				<thead>
					<tr>
						<th className="user-name">Name</th>
						<th className="user-email">Email</th>
						<th className="user-edit">Edit</th>
						<th className="user-delete">Delete</th>
					</tr>
				</thead>
				<UserInfo
					users={this.props.users}
					isEdit={this.props.isEdit}
					focusUserId={this.props.focusUserId}
					handleHonverOn={(focusUserId) => this.props.changeState("focusUserId", focusUserId)}
					handleEdit={() => this.props.changeState("isEdit", true)}
					handleDelete={(focusUserId) => this.props.deleteUser(focusUserId)}
				
				/>
			</table>
		)
	}
}
