import React, { Component } from "react";
import MovieList from "./movie_list";
import UserList from "./user/user_list";
import UserForm from "./user/user_form";
import "../stylesheets/movie.scss";
import "../stylesheets/body.css";

class Body extends Component {
  state = {users: [
    {id: 1, name: "vaan", email: "nguyen.dang.van@sun-asterisk.com"},
    {id: 2, name: "en", email: "chim.en@sun-asterisk.com"}
  ], isEdit: false, focusUserId: null}

  changeState = (field, value) => {
    this.setState({[field]: value});
  }

  getCurrentUser = () => {
    const currentUser = this.state.users.filter(user => user.id === this.state.focusUserId)
    debugger
    return currentUser;
  }

  deleteUser = (userId) => {
    const removeArr = this.state.users.filter(user => user.id !== userId);
    this.setState({users: removeArr})
  }

  handleCancel = () => {
    this.setState({isEdit: false})
  }

  handleSubmit = (e, id, newValue) => {
    e.preventDefault();
    if(this.state.isEdit)
    {
      const listUser = this.state.users;
      const index = listUser.findIndex(user => user.id === id)
      listUser[index] = newValue;
      this.setState({ users: listUser});
    }
    this.handleCancel();
  }

  render () {
    const initData=[
      {id: 1, movie: "Mulan 2020", country: "China"},
      {id: 2, movie: "Ròm", country: "VietNam"},
      {id: 3, movie: "Tenet", country: "United Kingdom, United State"}
    ]
    
		return (
			<div className="body-component">
        <UserList
          users={this.state.users}
          isEdit={this.state.isEdit}
          focusUserId={this.state.focusUserId}
          changeState={this.changeState}
          deleteUser={this.deleteUser}
        />
        {this.state.isEdit ? <UserForm 
          currentValues={this.getCurrentUser}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit}
        /> : null}
        {/* <User /> */}
        {/* <MovieList data={initData} /> */}
			</div>
		);
	}
}

export default Body;
