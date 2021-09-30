import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  handleInput = (propertyName, value) => {
    this.setState({
      comment: {
        ...this.state.comments,
        [propertyName]: value,
      },
    });
  };

  async postComment(e) {
    e.preventDefault();

    // console.log(this.state.comments);

    try {
      const response = fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comments),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMzUyNjRiYjUzZDAwMTViMWEwMzQiLCJpYXQiOjE2MzIzMTg3NTgsImV4cCI6MTYzMzUyODM1OH0.-KaV6cAY0zF2Bo26q8xvwA0xYrtkSTfOKp8E2Ia43Hs",
          },
        }
      );
      if (response.ok) {
        alert("comment posted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Form onSubmit={this.postComment}>
        <Form.Group className="mb-3">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type here..."
            value={this.state.comments.comment}
            onChange={(e) => this.handleInput("comment", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Rating</Form.Label>
          <Form.Control
            type="text"
            placeholder="1 - 5"
            value={this.state.comments.rate}
            onChange={(e) => this.handleInput("rate", e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
