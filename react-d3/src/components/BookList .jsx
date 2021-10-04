import SingleBook from "./SingleBook ";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import CommemtArea from "./comments/CommentArea";
//import Container from "react-bootstrap/Container";

class BookList extends Component {
  state = {
    query: "",
  };

  search = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  //   result = words.filter(word => word.includes("des"));
  filterBookList = (list) => {
    //console.log(list);
    // let result = list.title;
    const isFound = list.filter((book) =>
      book.title.toLowerCase().includes(this.state.query.toLowerCase())
    );
    console.log(isFound);

    return isFound;
    // list.forEach((book) => {
    //   const result = book.title.filter((b) => b.includes(this.state.querry));

    //   console.log("string");
    // });
  };

  render() {
    return (
      <div>
        <div>
          <Form.Group className="m-3 w-25">
            <Form.Control
              type="text"
              placeholder="Search here"
              value={this.state.query}
              onChange={(e) => this.search(e)}
            />
          </Form.Group>
        </div>

        <div className="row">
          <div className="d-flex flex-wrap justify-content-around col-8">
            {!this.state.query
              ? this.props.list.map((books) => (
                  <SingleBook
                    asin={books.asin}
                    image={books.img}
                    title={books.title}
                  />
                ))
              : this.filterBookList(this.props.list).map((books) => (
                  <SingleBook
                    asin={books.asin}
                    image={books.img}
                    title={books.title}
                  />
                ))}
          </div>
          <div className="col-4">
            <CommemtArea></CommemtArea>
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
