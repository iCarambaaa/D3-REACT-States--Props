import ListGroup from "react-bootstrap/ListGroup";
//import ListGroupItem from "react-bootstrap/ListGroupItem";
import SingleComment from "./SingleComment";

export default function CommentsList(props) {
  console.log("in singleComment", props);
  return (
    <ListGroup variant="flush">
      {props.comments &&
        props.comments.map((comment, i) => (
          <SingleComment comments={props.comments[i]} i={i + 1} />
        ))}
    </ListGroup>
  );
}
