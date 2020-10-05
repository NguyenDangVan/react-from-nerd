import React, { Component } from 'react';
import LeftMenu from '../components/left_menu';
import MovieList from "../components/MovieList";
import MovieList1 from "../components/movie_list_1";
import '../stylesheets/body.css';

class Body extends Component {
  render () {
    const data=[
      {
        id: 1,
        movie: "Mulan 2020",
        country: "China"
      },
      {
        id: 2,
        movie: "Ròm",
        country: "VietNam"
      },
      {
        id: 3,
        movie: "Tenet",
        country: "United Kingdom, United State"
      }
    ]
		return (
			<div className='body-component'>
        <MovieList1 data={data} />
				{/* <LeftMenu data={data} parentMethod={() => this.handleClick()} /> */}
				{/* {this.state.editMode ?
				<RightMenu  />
				:
				null
				} */}
			</div>
		);
	}
}

export default Body;
