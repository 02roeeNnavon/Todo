import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };
  render() {
    const {onAdd} = this.props; 
    return (
      <div className="m-2 row">
        <div className="p-0 col-11">
          <input
            name="text"
            type="text"
            className="form-control"
            placeholder = "what do you need to do today"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-1">
        <button onClick={()=>onAdd(this.state.text)} className="btn btn-primary me-1 h-auto">
          Add
        </button>
        </div>
      </div>
    );
  }
}
