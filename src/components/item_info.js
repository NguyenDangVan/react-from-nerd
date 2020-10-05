import React, { Component } from 'react';
import RightMenu from '../components/right_menu';
import '../stylesheets/item_info.scss';

export default class ItemInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      canEdit: false,
      is_hover: false
    }
  }

  handleHoverOn() {
    this.setState({is_hover: true})
  }

  handleHoverOff() {
    this.setState({is_hover: false})
  }

  handleClick() {

  }

  render () {
    return (
      <tbody>
        <tr
          onMouseOver={() => this.handleHoverOn()}
          onMouseLeave={() => this.handleHoverOff()}>
          <td>{this.props.movie_name}</td>
          <td>{this.props.country}</td>
          <td>{this.state.is_hover ?
            <button
              className='btn-edit'
              onClick={(e) => this.handleClick(e.target.id)}
            >Edit</button>
            : null
            }
          </td>
          <td>{this.state.is_hover ? <button className='btn-edit'>Delete</button> : null}</td>
        </tr>
      </tbody>
    )
  }
}
