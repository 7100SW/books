import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelfScreen from "./screens/ShelfScreen";
import SearchScreen from "./screens/SearchScreen";


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: {
      currents: [],
      wants: [],
      reads: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(() => {
      this.reload();
    });
  }

  onBookUpdate = (book) => {
    BooksAPI.update(book, book.shelf).then(() => {
      this.reload();
    });

  };

  onBookAdded = () => {
    this.reload();
  };


  reload = () => {

    BooksAPI.getAll().then(result => {
      const reading = result.filter(b => b.shelf === 'currentlyReading');
      const next = result.filter(b => b.shelf === 'wantToRead');
      const done = result.filter(b => b.shelf === 'read');

      this.setState({
        books: {
          currents: reading,
          wants: next,
          reads: done
        }
      });
    });
  }

  render() {
    if(this.state.books.currents.length === 0 && this.state.books.wants.length === 0 && this.state.books.reads.length === 0)
      return <div>Loading ... </div>;

    return (
        <Router>
          <div className="app">

            <Switch>
              <Route path="/search">
                <SearchScreen onBookAdded={this.onBookAdded}></SearchScreen>
              </Route>

              <Route exact path="/">
                <ShelfScreen books={this.state.books} onBookUpdate={this.onBookUpdate}>
                </ShelfScreen>
              </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default BooksApp;
