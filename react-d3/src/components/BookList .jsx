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
  filterBook = (list) => {
    //console.log(list);
    // let result = list.title;
    const isFound = list.filter((book) =>
      book.title.toLowerCase().includes(this.state.querry.toLowerCase())
    );
    console.log(isFound);

    // list.forEach((book) => {
    //   const result = book.title.filter((b) => b.includes(this.state.querry));

    //   console.log("string");
    // });
  };

  render() {
    return (
      <div>
        <div>
          <Form.Group className="m-3">
            <Form.Control
              type="text"
              placeholder="Search here"
              value={this.state.querry}
              onChange={(e) => this.search(e)}
            />
          </Form.Group>
          <Button
            type="button"
            onClick={() => this.filterBook(this.props.list)}
          >
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
