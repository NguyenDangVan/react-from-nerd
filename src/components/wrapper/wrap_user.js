import React, { Component } from "react";

export default class UserForm extends Component {
	state = {currentValues: {}, errors: {}};

	validateRequired = (field) => {
		const errorMessage = this.state.currentValues[field] ? null : (field + " is required");

		this.setState({
			errors: {
				...this.state.errors, [field]: errorMessage
			}
		})
	}

	onChange = e => {
		const {name, value} = e.target;

		this.setState({
			currentValues: {
				...this.state.currentValues, [name]: value
			}
		}, () => this.validateRequired(name))
	}

  render() {
		return (
			this.props.children({
				currentValues: this.state.currentValues,
				errors: this.state.errors,
				onChange: this.onChange
			})
		)
	}
}
