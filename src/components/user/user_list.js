import React from "react";
import Pagination from "../shared/pagination";
import "../../stylesheets/user_list.css";

const UserList = props => {
	const { users, isEdit, handleEdit,
		isCancel, handleDelete } = props;

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
			<tbody>
				<Pagination
					data={users}
					isEdit={isEdit} isCancel={isCancel}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			</tbody>
		</table>
	)

}

export default UserList;
