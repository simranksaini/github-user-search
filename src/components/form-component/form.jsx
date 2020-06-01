import React, { Component } from "react";
// import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Form } from "semantic-ui-react";
import "./form.css";

export const CUR_PROF = "curprof";

class InpVal extends Component {
  state = { userName: "" };
  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .catch(err => {
        return err.message;
      });

    console.log(resp.data);
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
    return { type: CUR_PROF };
  };
  render() {
    return (
      <div className="search">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Github Username"
              name="github user"
              value={this.state.userName}
              onChange={event =>
                this.setState({ userName: event.target.value })
              }
            />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default InpVal;
