import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
    displayBooksDetails() {
        if (!this.props.data) return <div>No Book selected</div>;
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map((book) => {
                            return <li key={book.id}>{book.name}</li>;
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div>No book selected...</div>;
        }
    }
    render() {
        console.log(this.props);
        return <div id="book-details">{this.displayBooksDetails()}</div>;
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId,
            },
        };
    },
})(BookDetails);
