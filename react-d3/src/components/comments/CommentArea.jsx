import AddComment from "./AddComment";
import { Component } from "react";
import CommentsList from "./CommentsList";

class CommemtArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMzUyNjRiYjUzZDAwMTViMWEwMzQiLCJpYXQiOjE2MzIzMTg3NTgsImV4cCI6MTYzMzUyODM1OH0.-KaV6cAY0zF2Bo26q8xvwA0xYrtkSTfOKp8E2Ia43Hs",
        },
      }
    );
    const realComments = await response.json();
    this.setState({ comments: realComments });
  };

  render() {
    console.log(this.props.asin);
    return (
      <div>
        <h5>Comments</h5>
        <CommentsList comments={this.state.comments} />
        <AddComment></AddComment>
      </div>
    );
  }
}

export default CommemtArea;
