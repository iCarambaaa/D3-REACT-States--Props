import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./comments/CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  selectCard = () => {
    this.setState({
      selected: !this.state.selected,
    });

    console.log(this.state);
  };

  render() {
    console.log(this.props.key);
    console.log(this.props.title);
    return (
      <Card
        key={this.props.key}
        style={{ width: "24%", marginTop: "10px", opacity: "0.8" }}
        onClick={this.selectCard}
        className={this.state.selected ? "selected" : null}
      >
        <Card.Img className="img-books" variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title className="clamp">{this.props.title}</Card.Title>
        </Card.Body>
        {this.state.selected ? <CommentArea key={this.key} /> : null}
      </Card>
    );
  }
}

export default SingleBook;
