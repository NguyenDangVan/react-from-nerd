import React, { useState } from "react";
import UserList from "./user/user_list";
import UserForm from "./user/user_form";
import "../stylesheets/movie.scss";
import "../stylesheets/body.css";

const Body = (props) => {
  const listUsers = [
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
  ]
  const [users, setUsers] = useState(listUsers);
  const [focusUserId, setFocusUserId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isSave, setIsSave] = useState(false);
  
  const handleDelete = (id) => {
    const removeArr = users.filter(user => user.id !== id);
    setUsers(removeArr);
  }

  const handleEdit = (id) => {
    setFocusUserId(id);
    setIsEdit(true);
    setIsCancel(false);
    setIsSave(false);
  }

  const handleSubmit = (newValue, action) => {
    const newListUser = users.map(user => user.id === newValue.id ? newValue : user);

    if (action === "submit") {
      setIsSave(true);
      setIsCancel(false);
      setIsEdit(false);
      setUsers(newListUser);
    } else {
      setIsSave(false);
      setIsCancel(true);
      setIsEdit(false)
      setUsers(users);
    }
  }

  const userList = <UserList
    users={users}
    focusUserId={focusUserId}
    isEdit={isEdit}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />

  const userForm = (isCancel || isSave || focusUserId === null) ? null
    : <UserForm
      users={users}
      focusUserId={focusUserId}
      isSave={isSave}
      isCancel={isCancel}
      handleSubmit={handleSubmit}
    />

  return (
    <div className="body-component">
      <div className="left-menu">
        { userList }
      </div>
      <div className="right-menu">
        { userForm }
      </div>
    </div>
  )
}

export default Body;
