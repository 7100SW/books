import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import BookShelfBooks from "../components/BookShelfBooks";


export default class SearchScreen extends Component {

    state = {
        books: []
    }

    onSearchChanges = (e) => {
        BooksAPI.search(e.target.value).then(result => {
            if(result && result.length > 0)
                this.setState({
                    books: result
                });
            else
                this.setState({
                    books: []
                });
        });
    }

    onBookUpdate = (book) => {
        BooksAPI.get(book.id).then(result => {
            BooksAPI.update(result, book.shelf).then(result => {
                console.log('Updated Book Shelf', result);
                this.props.onBookAdded();
            });
        });
    }

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" onChange={this.onSearchChanges}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelfBooks books={this.state.books} onBookUpdate={(book) => this.onBookUpdate(book)}/>
                </div>
            </div>
        );
    }
}