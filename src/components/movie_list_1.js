import React, { Component } from 'react';
import MovieForm1 from './movie_form_1';
import Movie1 from './movie1';

export default class MovieList1 extends Component {
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
  }

  addMovie(item) {
    if (!item.movie)
      return;

    const newMovieList = [...this.state.items, item];
    this.setState({items: newMovieList});
  }

  updateMovie(movieId, newValue) {
    if (!newValue.movie)
      return;

    const newMovieList = this.state.items.map(item =>
      item.id === movieId ? newValue : item
    )

    this.setState({items: newMovieList});
  }
  

  showEditForm(movieId) {
    const movie_edit = this.state.items.filter(item => item.id === movieId)
    if (movie_edit)
      this.setState({showEdit: true, movie: movie_edit})
  }

  removeMovie(movieId) {
    const removeArr = this.state.items.filter(item => item.id !== movieId);

    this.setState({items: removeArr})
  }

  render() {
    return (
      <div className='menu'>
        <div className='left-menu'>
          <h1>Add new movies</h1>
          <MovieForm1 onSubmit={(e) => this.addMovie(e)} />
          <table className='movies'>
            <thead>
              <tr>
                <th className='movie-name'>Movie Name</th>
                <th className='movie-coutry'>Country</th>
                <th className='movie-edit'>Edit</th>
                <th className='movie-delete'>Delete</th>
              </tr>
            </thead>
            <Movie1
              movies={this.state.items}
              showEditForm={this.showEditForm}
              removeMovie={this.removeMovie}
              updateMovie={this.updateMovie}
            />
          </table>
        </div>
        <div className="right-menu">
          {this.state.showEdit ?
            <MovieForm1 edit={this.state.movie} onSubmit={this.updateMovie} />
            : null}
        </div>
      </div>
    )
  }
}
