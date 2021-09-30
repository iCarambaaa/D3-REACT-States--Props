import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function SingleComment(props) {
  return (
    <ListGroup.Item>
      {props && props.comments.comment + " " + props.comments.rate}
    </ListGroup.Item>
  );
}

export default SingleComment;
