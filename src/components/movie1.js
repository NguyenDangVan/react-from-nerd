import React, { Component } from 'react';
import MovieForm1 from "./movie_form_1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Movie1 extends Component {
	constructor(props) {
		super(props)

		this.state={
			item: {
        id: null,
        movie: "",
        country: ""
      }
		}
	}

	submitUpdate(value){
    this.props.updateMovie(this.state.item.id, this.state.item.movie);

    this.setState({
      item: {
      id: null,
      movie: "",
      country: ""
    }})
  }
  
  changeState(item){
    this.setState({item: item})
  }

	render(){
    const items = this.props.movies;
		const listItems = items.map((item, index) => 
    <tr 
      className="list"
      key={item.id}>
	      <td>{item.movie}</td>
        <td>{item.country}</td>
	      <td>
          <span><FontAwesomeIcon className="faicons" icon="edit"
	          onClick={() => this.props.showEditForm(item.id)}
	          className='edit-icon'/>
          </span>
        </td>
        <td>
          <span><FontAwesomeIcon className="faicons" icon="trash"
	          onClick={() => this.props.removeMovie(item.id)}
	          className='delete-icon'/>
          </span>
        </td>
      </tr>
		)
		return(
      <tbody>{listItems}</tbody>
		)
	}
}