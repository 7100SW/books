import React, {Component} from 'react';
import BookShelf from "../components/BookShelf";
import {Link} from "react-router-dom";

export default class ShelfScreen extends Component {
    render() {

        const {currents, wants, reads } = this.props.books;
        const {onBookUpdate} = this.props;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf  name={'Currently Reading'} books={currents} onBookUpdate={onBookUpdate}/>
                        <BookShelf  name={'Want to Read Next'} books={wants} onBookUpdate={onBookUpdate}/>
                        <BookShelf  name={'Reads'} books={reads} onBookUpdate={onBookUpdate}/>
                    </div>
                </div>

                <div className="open-search">
                    <Link to='/search'>Add a Book</Link>
                </div>

            </div>
        );
    }
}