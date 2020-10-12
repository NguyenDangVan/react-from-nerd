import React, { Component } from "react";
import MovieForm from "./movie_form";
import Movie from "./movie";

export default class MovieList extends Component {
  constructor(props){
    super(props)

    this.state={
      showEdit: false,
      movie: null,
      items: this.props.data,
      currentItem: {
        id: null,
        movie: "",
        country: ""
      }
    }

    this.addMovie = this.addMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
  }

  addMovie(item) {
    if (!item.movie && !item.country)
      return;

    const newMovieList = [...this.state.items, item];
    this.setState({items: newMovieList});
  }

  updateMovie(movieId, newValue) {
    if (!newValue.movie && !newValue.country)
      return;

    const listMovies = this.state.items
    const index = listMovies.findIndex(item => item.id === movieId)
    listMovies[index] = newValue
    this.setState({ items: listMovies });
    this.hideEditForm();
  }
  
  hideEditForm(){
    this.setState({ showEdit: false });
  }

  showEditForm(movieId) {
    const movie_edit = this.state.items.filter(item => item.id === movieId)
    if (movie_edit)
      this.setState({showEdit: true, movie: movie_edit[0]})
  }

  removeMovie(movieId) {
    const removeArr = this.state.items.filter(item => item.id !== movieId);
    this.setState({items: removeArr})
  }

  render() {
    return (
      <div className="menu">
        <div className="left-menu">
          <h1>Add new movies</h1>
          <MovieForm onSubmit={(e) => this.addMovie(e)} />
          <table className="movies">
            <thead>
              <tr>
                <th className="movie-name">Movie Name</th>
                <th className="movie-coutry">Country</th>
                <th className="movie-edit">Edit</th>
                <th className="movie-delete">Delete</th>
              </tr>
            </thead>
            <Movie
              movies={this.state.items}
              showEditForm={this.showEditForm}
              removeMovie={this.removeMovie}
              updateMovie={this.updateMovie}
            />
          </table>
        </div>
        <div className="right-menu">
          {this.state.showEdit ?
            <MovieForm edit={this.state.movie} hideEditForm={this.hideEditForm} onSubmit={this.updateMovie} />
            : null}
        </div>
      </div>
    )
  }
}
