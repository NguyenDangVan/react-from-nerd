import React, { Component } from "react";
import UserList from "./user/user_list";
import UserForm from "./user/user_form";
import "../stylesheets/movie.scss";
import "../stylesheets/body.css";

class Body extends Component {
  state = {
    users: [
      {id: 1, name: "vaan", email: "nguyen.dang.van@sun-asterisk.com"},
      {id: 2, name: "Van1", email: "en1.en@sun-asterisk.com"},
      {id: 3, name: "Van2", email: "gr.en@sun-asterisk.com"},
      {id: 4, name: "Van3", email: "lalaland.en@sun-asterisk.com"},
      {id: 5, name: "Van4", email: "youreiscoffe.en@sun-asterisk.com"},
      {id: 6, name: "Van5", email: "ineed.en@sun-asterisk.com"},
      {id: 7, name: "Van6", email: "inmymorning.en@sun-asterisk.com"},
      {id: 8, name: "Van7", email: "yourare.en@sun-asterisk.com"},
      {id: 9, name: "Van8", email: "mysunshine.en@sun-asterisk.com"},
      {id: 10, name: "Van9", email: "ipouring.en@sun-asterisk.com"},
    ],
    focusUserId: null,
    isEdit: false,
    isCancel: false,
    isSave: false
  }

  changeState = (field, value) => {
    this.setState({[field]: value});
  }

  getCurrentUser = () => {
    const currentUser = this.state.users.filter(user => user.id === this.state.focusUserId)
    return currentUser;
  }

  handleDelete = (id) => {
    const removeArr = this.state.users.filter(user => user.id !== id);
    this.setState({users: removeArr})
  }

  handleEdit = (id) => {
    this.setState({
      focusUserId: id,
      isEdit: true,
      isCancel: false,
      isSave: false
    })
  }

  handleSubmit = (newValue, action) => {
    let newState = this.state;
    const newListUser = newState.users.map(user => user.id === newValue.id ? newValue : user)

    if (action === "submit") {
      newState = Object.assign(newState, {isSave: true, isCancel: false, isEdit: false })
    } else {
      newState = Object.assign(newState, {isSave: false, isCancel: true, isEdit: false })
    }

    if(this.state.isSave) {
      this.setState({users: newListUser})
    } else {
      this.setState({users: this.state.users})
    }
  }

  renderListUser = () => {
    const { users, focusUserId, isCancel, isEdit } = this.state;

    return <UserList
      users={users}
      focusUserId={focusUserId}
      isEdit={isEdit}
      isCancel={isCancel}
      handleEdit={this.handleEdit.bind(this)}
      handleDelete={this.handleDelete.bind(this)}
    />
  }

  renderUserForm = () => {
    const { users, isSave, isCancel, focusUserId } = this.state;
    if (isCancel || isSave || focusUserId === null) {return null}

    return <UserForm
      users={users}
      focusUserId={focusUserId}
      isSave={isSave}
      isCancel={isCancel}
      handleSubmit={this.handleSubmit.bind(this)}
    />
  }

  render () {
		return (
			<div className="body-component">
        <div className="left-menu">
          { this.renderListUser() }
        </div>
        <div className="right-menu">
          { this.renderUserForm() }
        </div>
			</div>
		);
	}
}

export default Body;
