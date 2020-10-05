import React, { Component } from "react";
import "../stylesheets/ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListItems extends Component {
  constructor(props){
    super(props);

    this.state={
      is_hover: false
    }
  }

  handleHoverOn() {
    this.setState({
      is_hover: true
    })
  }

  handleHoverOff() {
    this.setState({is_hover: false})
  }

  render () {
    const items = this.props.items;
    const listItems = items.map(item =>{
      return <tr 
          className="list"
          key={item.key}
          onMouseOver={() => this.handleHoverOn()}
          onMouseLeave={() => this.handleHoverOff()}
        >
        <td>{item.movie_name}</td>
        <td>{item.country}</td>
        <td>{this.state.is_hover ?
          <span onClick={() => this.props.showEditForm(item.key)}>
            <FontAwesomeIcon className="faicons" icon="edit"/>
          </span>
          : null }
        </td>
        <td>{this.state.is_hover ?
          <span onClick={() => this.props.deleteItem(item.key)}>
            <FontAwesomeIcon className="faicons" icon="trash"/>
          </span>
          : null }
        </td>
      </tr>
    })

    return(
      <tbody>
        {listItems}
      </tbody>
    )
  }
}

export default ListItems;