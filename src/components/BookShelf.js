import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelfBooks from "./BookShelfBooks";

export default class BookShelf extends Component {
    render() {
        const {name, books, onBookUpdate} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <BookShelfBooks books={books} onBookUpdate={onBookUpdate}/>
            </div>
        );
    }
}

BookShelf.propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        shelf: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        imagesLinks: PropTypes.shape({
            thumbnail: PropTypes.string
        })
    })),
    onBookUpdate: PropTypes.func,
};