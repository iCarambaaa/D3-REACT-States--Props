// import AddComment from "./comments/AddComment";
import { Component } from "react";
import CommentsList from "./CommentsList";

class CommemtArea extends Component {
  render() {
    console.log(this.props.key);
    return (
      <div>
        <h5>Comments</h5>
        <CommentsList />
      </div>
    );
  }

  componentDidMount = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.key,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMzUyNjRiYjUzZDAwMTViMWEwMzQiLCJpYXQiOjE2MzIzMTg3NTgsImV4cCI6MTYzMzUyODM1OH0.-KaV6cAY0zF2Bo26q8xvwA0xYrtkSTfOKp8E2Ia43Hs",
        },
      }
    );
    const realComments = await response.json();
    console.log(realComments);
  };
}

export default CommemtArea;
