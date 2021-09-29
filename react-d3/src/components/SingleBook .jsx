import { Component } from "react";
import Card from "react-bootstrap/Card";

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
    return (
      <Card
        key={this.props.asin}
        style={{ width: "19%", marginTop: "10px", opacity: "0.8" }}
        onClick={this.selectCard}
        className={this.state.selected ? "selected" : null}
      >
        <Card.Img className="img-books" variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title className="clamp">{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
