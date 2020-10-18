import { Component } from "react";

export default class WrapPaginate extends Component {
	handleClick = (e) => {
		this.props.handleClick(e);
	}

  render() {
  	const { data, pageLimit } = this.props;
  	const pageNumbers = [];

  	for(let i=1; i <= Math.ceil(data.length / pageLimit); i++)
			pageNumbers.push(i);

  	return this.props.children({
  		pageNumbers: pageNumbers,
  		handleClick: this.handleClick
  	})
	}
}
