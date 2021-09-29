import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  render() {
    // console.log(this.props);
    return (
      <Card style={{ width: "24%", marginTop: "10px" }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
