import React from 'react';
import PropTypes from 'prop-types';
import BookShelfBooks from "./BookShelfBooks";

export default function BookShelf(props) {
    const {name, books, filter, onBookUpdate} = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <BookShelfBooks books={books.filter(b => b.shelf === filter)} onBookUpdate={onBookUpdate}/>
        </div>
    );
}

BookShelf.propTypes = {
    name: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
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