import ListGroup from "react-bootstrap/ListGroup";
//import ListGroupItem from "react-bootstrap/ListGroupItem";

function SingleComment(props) {
  return (
    <ListGroup.Item key={props.i}>
      {props && props.i + "." + " Comment:"}
      {" " + props.comments.comment}
      <br />
      <strong>Rating: </strong> <strong>{props.comments.rate} </strong>
    </ListGroup.Item>
  );
}

export default SingleComment;
