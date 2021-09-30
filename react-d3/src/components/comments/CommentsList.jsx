import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
// import SingleComment from "./comments/SingleComment";

export default function CommentsList(props) {
  return (
    <ListGroup variant="flush">
      {props.comments && props.comments.map((comment) => <h1>hello</h1>)}
    </ListGroup>
  );
}
