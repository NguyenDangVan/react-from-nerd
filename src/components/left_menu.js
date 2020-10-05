import React, { Component } from 'react';
import ListItems from "../components/ListItems";
// import ItemInfo from '../components/item_info';
import '../stylesheets/movie.scss';
import '../stylesheets/left_menu.css';
import '../stylesheets/right_menu.scss';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default class LeftMenu extends Component {
  constructor(props){
    super(props);

    this.state={
      is_edit: false,
      items: props.data,
      currentItem: {
        movie_name: "",
        country: "",
        key: ""
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "movie_name"){
      this.setState({
        currentItem: {
          movie_name: value,
          country: this.state.currentItem.country,
          key: Date.now()
        }
      })
    } else {
      this.setState({
        currentItem: {
          movie_name: this.state.currentItem.movie_name,
          country: value,
          key: Date.now()
        }
      })
    }
    
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          movie_name: "",
          country: "",
          key: ""
        }
      })
    }

  }

  deleteItem(key) {
    const filterItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filterItems
    })
  }

  showEditForm(key) {
    this.setState({is_edit: true})
  }

  render () {
    return (
      <div className='menu'>
        <div className='left-menu'>
          <h3>Lastest movies</h3>
          <table className='movies'>
            <thead>
              <tr>
                <th className='movie-name'>Movie Name</th>
                <th className='movie-coutry'>Country</th>
                <th className='movie-edit'>Edit</th>
                <th className='movie-delete'>Delete</th>
              </tr>
            </thead>
            <ListItems items={this.state.items} showEditForm={this.showEditForm} deleteItem={this.deleteItem} />
          </table>
        </div>
        <div className="right-menu">
          {this.state.is_edit ?
            <div>
              <h2>Edit movie</h2>
              <form className="edit-movie">
                <input 
                  type="text"
                  name="movie_name"
                  placeholder="Enter movie name"
                  value={this.state.currentItem.movie_name}>
                </input>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  value={this.state.currentItem.country}>
                </input>
                <button type="submit" onClick={(e) => this.addItem(e)}>Submit</button>
              </form>
            </div>
            : 
            <div>
              <h2>New movie</h2>
              <form className="movie-form">
                <input 
                  type="text"
                  name="movie_name"
                  placeholder="Enter movie name"
                  value={this.state.currentItem.movie_name}
                  onChange={(e) => this.handleInput(e)}  
                ></input>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  value={this.state.currentItem.country}
                  onChange={(e) => this.handleInput(e)}  
                ></input>
                <button type="submit" onClick={(e) => this.addItem(e)}>Submit</button>
              </form>
            </div>
          }
        </div>
      </div>
    )
  }
}
