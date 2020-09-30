import React, { Component } from 'react';
import ItemInfo from '../components/item_info';
import '../stylesheets/movie.scss';
import '../stylesheets/left_menu.scss';

export default class LeftMenu extends Component {
  render () {
    return (
      <div className='left-menu'>
        <h3>Lastest movies</h3>
        <table className='movies'>
          <thead>
            <tr>
              <th className='movie-name'>Movie Name</th>
              <th className='movie-coutry'>Cinema</th>
              <th className='movie-edit'>Edit</th>
              <th className='movie-delete'>Delete</th>
            </tr>
          </thead>
          <ItemInfo movie_name='Mulan 2020' country='China' />
          <ItemInfo movie_name='Tenet' country='Hollywood' />
          <ItemInfo movie_name='The Magic Kids: Three Unlikely Heroes' country='China' />
        </table>
      </div>
    )
  }
}
