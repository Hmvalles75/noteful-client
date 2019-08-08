import React, { Component } from "react";
import ValidationError from "./ValidationError";
import "./Add.css";
class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      }
    };
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state;

    console.log("Name: ", name.value);
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    }
  }

  render() {
    const nameError = this.validateName();

    return (
      <form className="new-folder" onSubmit={e => this.handleSubmit(e)}>
        <h2>Add Folder</h2>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="name__control"
            name="name"
            id="name"
            onChange={e => this.updateName(e.target.value)}
          />
          {this.state.name.touched && <ValidationError message={nameError} />}
        </div>
        <button
          type="submit"
          className="addFolder__button"
          disabled={this.validateName()}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddFolder;
