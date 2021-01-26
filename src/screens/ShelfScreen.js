import React, {Component} from 'react';
import BookShelf from "../components/BookShelf";
import {Link} from "react-router-dom";

export default class ShelfScreen extends Component {
    render() {

        const {collection } = this.props.books;
        const {onBookUpdate} = this.props;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf  name={'Currently Reading'} books={collection} filter={'currentlyReading'} onBookUpdate={onBookUpdate}/>
                        <BookShelf  name={'Want to Read Next'} books={collection} filter={'wantToRead'} onBookUpdate={onBookUpdate}/>
                        <BookShelf  name={'Reads'} books={collection} filter={'read'} onBookUpdate={onBookUpdate}/>
                    </div>
                </div>

                <div className="open-search">
                    <Link to='/search'>Add a Book</Link>
                </div>

            </div>
        );
    }
}