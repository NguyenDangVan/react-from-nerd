import React, { Component } from "react";
import UserInfo from "../user/user_info";
import WrapPaginate from "../wrapper/wrap_paginate";

export default class Pagination extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data || [],
			currentPage: 1,
			pageLimit: 3
		};
	}

	handleClick = (e) => {
		this.setState({
			currentPage: Number(e.target.id)
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.data !== this.state.data)
	    this.setState({data: this.state.data});
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.data !== prevState.data) {
			return {data: nextProps.data}
		} else return null;
	}

	renderData = () => {
		const { isEdit, isCancel, handleEdit, handleDelete } = this.props;
		const { data, currentPage, pageLimit } = this.state;

		const indexOfLastData = currentPage * pageLimit;
		const indexOfFirstData = indexOfLastData - pageLimit;
		let currentDataPage = data.slice(indexOfFirstData, indexOfLastData);

		if (data.length <= pageLimit)
			currentDataPage = data

		const listUserInfo = currentDataPage.map((user, index) => {
			return <UserInfo 
				user={user} key={index} index={index}
				isEdit={isEdit} isCancel={isCancel}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
			/>
		});

		return listUserInfo;
	}

	renderPaginate = () => {
		const totalPageNumbers = <WrapPaginate
			data={this.state.data}
			pageLimit={this.state.pageLimit}
			handleClick={this.handleClick.bind(this)}>
			{({ pageNumbers, handleClick }) => (
				pageNumbers.map(number => {
					return (
						<li key={number}>
							<a href="!#" id={number} onClick={handleClick}>
								{number}
							</a>
						</li>
					)
				})
			)}
		</WrapPaginate>

		return (
			<tr>
				<td>
					{totalPageNumbers}
				</td>
			</tr>
		)
	}

  render() {
  	return (
	  	<>
	  		{this.renderData()}
	  		{this.renderPaginate()}
	  	</>
  	)
	}
}
