import SingleBook from "./SingleBook ";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class BookList extends Component {
  state = {
    querry: "",
  };

  search = (e) => {
    this.setState({
      querry: e.target.value,
    });
  };

  //   result = words.filter(word => word.includes("des"));
  filterBook = ({ list }) => {
    // result = list.title
    list.foreach((book) => {
      const result = book.title.filter((b) => b.includes(this.state.querry));

      console.log(result);
    });
  };

  render() {
    console.log(this.filterBook);
    return (
      <div>
        <div>
          <Form.Group className="m-3" onChange={this.search}>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={this.state.querry}
            />
          </Form.Group>
          <Button type="button" onClick={this.filterBook(this.props.list)}>
            Search
          </Button>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          {this.props.list.map((books) => (
            <SingleBook image={books.img} title={books.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default BookList;
