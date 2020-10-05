import React, { Component } from "react";
import MovieList from "./movie_list";
import "../stylesheets/movie.scss";
import "../stylesheets/left_menu.css";
import "../stylesheets/body.css";

class Body extends Component {
  render () {
    const initdata=[
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
			<div className="body-component">
        <MovieList data={initdata} />
			</div>
		);
	}
}

export default Body;
