import React, { Component } from "react";
import WrapUser from "../wrapper/wrap_user";
import "../../stylesheets/form.css";

export default class UserForm extends Component {
  componentWillMount() {
    const user = this.focusUser();

    this.setState({
      id: user.id || null,
      name: user.name || "",
      email: user.email || ""
    })
  }

  focusUser = () => {
    const { users, focusUserId } = this.props;
    return users.find(user => user.id === focusUserId) || {};
  }

  render () {
		return (
      <WrapUser oldValue={this.focusUser()} newValue={this.state} handleSubmit={this.props.handleSubmit.bind(this)}>
        {({ currentValues, errors, onChange, disabled, onSubmit}) => (
          <div>
            <div>
              <label>Name: </label>
              <input name="name" value={currentValues.name}
                onChange={onChange}
              ></input>
            </div>
            <div>
              <label>Email: </label>
              <input name="email" value={currentValues.email}
                onChange={onChange}
              ></input>
            </div>
            <button 
              className="button-submit" name="cancel"
              onClick={onSubmit}
            >Cancel</button>
            <button
              className="button-submit" name="submit"
              onClick={onSubmit} disabled={disabled}
            >Submit</button>
          </div>
        )}
      </WrapUser>
		)
	}
}
