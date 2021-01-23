import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShelfChangerComponent from "./ShelfChangerComponent";

export default class BookComponent extends Component {

    constructor(props) {
        super(props);

        this.onChangeShelf = this.onChangeShelf.bind(this);
    }

    onChangeShelf(shelf) {
        if(!this.props.onBookUpdate) {
            return;
        }

        this.props.onBookUpdate({
            ...this.props.book,
            shelf: shelf
        });
    }

    render() {
        const { book } = this.props;

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.coverUrl})` }}></div>
                    <ShelfChangerComponent onChange={this.onChangeShelf} value={book.shelf}/>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        );
    }
}

BookComponent.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        shelf: PropTypes.string
    }),
    onBookUpdate: PropTypes.func
};

