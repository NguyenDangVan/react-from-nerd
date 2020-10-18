import { Component } from "react";

export default class WrapUser extends Component {
	constructor() {
		super();

		this.state = { currentValues: {}, errors: {} };
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillMount() {
		this.setState({
			currentValues: this.props.newValue
		})
	}

	validateRequired = (field) => {
		const errorMessage = this.state.currentValues[field] ? null : field + " is required";

		this.setState({
			errors: {
				...this.state.errors, [field]: errorMessage
			}
		})
	}

	onChange = (e) => {
		const { name, value } = e.target;
		const newState = this.state;

		if (newState.currentValues["id"] === null) {newState.currentValues["id"] = Date.now()}

		this.setState({
			currentValues: {
				...newState.currentValues, [name]: value
			}
		}, () => this.validateRequired(name))
	}

	onSubmit = (e) => {
		const { name } = e.target; // name of button cancel || submit
		const userUpdate = name === "submit" ? this.state.currentValues : this.props.oldValue;

		this.props.handleSubmit(userUpdate, name);
	}

  render() {
  	const disabled = Object.values(this.state.errors)
  		.filter(Boolean).length > 0 ? true : false

		return this.props.children({
			currentValues: this.state.currentValues,
			errors: this.state.errors,
			disabled: disabled,
			onChange: this.onChange,
			onSubmit: this.onSubmit
		})
	}
}
