import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    username: "",
    password: ""
  };

  onusernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  onpasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("http://127.0.0.1:8000/register", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="username" value={this.state.username}
            onChange={this.onusernameChange} required
          />
          <br/>
          <textarea
            placeholder="password" value={this.state.password}
            onChange={this.onpasswordChange} required
          />
          <button type="submit">Create Record</button>
        </form>
      </div>
    );
  }
}

export default Post;