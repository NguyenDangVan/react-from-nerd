import React, { Component } from "react";
import WrapUser from "../wrapper/wrap_user";
import "../../stylesheets/form.css";

export default class UserForm extends Component {
	state = {currentValues: this.props.currentValues, errors: {}}

  render () {
		return (
      <WrapUser>
        {({currentValues, errors, onChange}) => (
          <div>
            <div>
              <label>Name: </label>{console.log(currentValues)}
              <input name="name" onChange={onChange} value={currentValues["name"]}></input>
            </div>
            <div>
              <label>Email: </label>
              <input name="email" onChange={onChange} value={currentValues["email"]}></input>
            </div>
            {
              console.log(errors)
            }
            <div className="error-message">{Object.values(errors).filter(Boolean).join(", ")}</div>
            <div 
              className="button-submit"
              onClick={this.props.handleCancel}
            >Cancel</div>
            <div 
              className="button-submit"
              onClick={this.props.handleSubmit}
              disabled={Object.values(this.state.errors).filter(Boolean).length}
            >Submit</div>
          </div>
        )}
      </WrapUser>
		)
	}
}
