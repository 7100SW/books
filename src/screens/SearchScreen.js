import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import BookShelfBooks from "../components/BookShelfBooks";


export default class SearchScreen extends Component {

    state = {
        books: []
    }

    onSearchChanges = (e) => {
        if (e.target.value && e.target.value.trim() !== '') {
            BooksAPI.search(e.target.value).then(result => {
                if (result && result.length > 0) {

                    const merged = result.map(r => {
                        const existing = this.props.books.find(b => b.id === r.id);
                        if (existing) {
                            return {
                                ...r,
                                shelf: existing.shelf
                            };
                        } else {
                            return r;
                        }
                    });

                    this.setState({
                        books: merged
                    });

                } else {
                    this.setState({
                        books: []
                    });
                }
            });
        }
    }

    onBookUpdate = (book) => {
        BooksAPI.get(book.id).then(result => {
            BooksAPI.update(result, book.shelf).then(result => {
                this.props.onBookAdded();
            });
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
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