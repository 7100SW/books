import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookComponent from "./BookComponent";

export default class BookShelfBooks extends Component {
    render() {
        const {books, onBookUpdate} = this.props;

        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                    books.map(book => {
                        const url = book.imageLinks ? book.imageLinks.smallThumbnail : '';

                        return (
                            <li key={book.id}>
                                <BookComponent onBookUpdate={onBookUpdate} book={{
                                    id: book.id,
                                    name: book.name,
                                    authors: book.authors,
                                    coverUrl: url,
                                    shelf: book.shelf
                                }}/>
                            </li>
                    )})
                    }
                </ol>
            </div>
        );
    }
}

BookShelfBooks.propTypes = {
    onBookUpdate: PropTypes.func,
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        imagesLinks: PropTypes.shape({
            thumbnail: PropTypes.string
        })
    }))
};