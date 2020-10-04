import React, { Component } from "react";

export default class MovieForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      isEdit: this.props.edit,
      currentInput: this.props.edit || {
        id: null,
        movie: "",
        country: ""
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const id = Math.floor(Math.random() * 10000);
    
    if (name === "movie"){
      this.setState({
        currentInput: {
          id: id,
          movie: value,
          country: this.state.currentInput.country
        }
      })
    } else {
      this.setState({
        currentInput: {
          id: id,
          movie: this.state.currentInput.movie,
          country: value
        }
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.isEdit){
      this.props.onSubmit(this.props.edit.id, this.state.currentInput)
    } else {
      this.props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        movie: this.state.currentInput.movie,
        country: this.state.currentInput.country
      })
    }

    this.setState({currentInput: {
      id: null,
      movie: "",
      country: ""
    }});
  }

  handleCancel(){
    this.props.hideEditForm()
  }

  render() {
    console.log(this.props.edit)
    return(
      <form onSubmit={(e) => this.handleSubmit(e)} className="movie-form">
        <input 
          type="text"
          name="movie"
          placeholder="Enter movie name"
          value={this.state.currentInput.movie}
          onChange={(e) => this.handleChange(e)}  
        ></input>
        <input
          type="text"
          name="country"
          placeholder="Enter country"
          value={this.state.currentInput.country}
          onChange={(e) => this.handleChange(e)}  
        ></input>
        <button type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        {this.props.edit ? <button type="submit" onClick={() => this.handleCancel()}>Cancel</button> : null}
      </form>
    )
  }
}