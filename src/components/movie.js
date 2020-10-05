import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Movie extends Component {
	constructor(props) {
		super(props)

		this.state={
      is_hover: false,
      item_id: "",
			item: {
        id: null,
        movie: "",
        country: "",
        is_hover: false
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

  handleHoverOn(itemId){
    this.setState({ item_id: itemId, is_hover: true });
  }

  handleHoverOff(itemId){
    this.setState({ item_id: itemId, is_hover: false });
  }

	render(){
    const items = this.props.movies;
		const listItems = items.map((item, index) => 
    <tr 
      className="list"
      key={item.id}
        onMouseOver={() => this.handleHoverOn(item.id)}
        onMouseLeave={() => this.handleHoverOff(item.id)}>
      <td>{item.movie}</td>
      <td>{item.country}</td>
      <td>
          {this.state.item_id === item.id && this.state.is_hover ? 
          <span>
            <FontAwesomeIcon className="faicons" icon="edit"
              onClick={() => this.props.showEditForm(item.id)}/>
          </span>
          : null
        }
      </td>
      <td>
        {this.state.item_id === item.id && this.state.is_hover ? 
          <span>
            <FontAwesomeIcon className="faicons" icon="trash"
              onClick={() => this.props.removeMovie(item.id)}/>
          </span>
          : null
        }
      </td>
    </tr>
		)
		return(
      <tbody>{listItems}</tbody>
		)
	}
}