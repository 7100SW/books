import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelfScreen from "./screens/ShelfScreen";
import SearchScreen from "./screens/SearchScreen";


class BooksApp extends React.Component {
  state = {
    books: {
      collection: []
    }
  }

  componentDidMount() {
    this.reload();
  }

  onBookUpdate = (book) => {
    BooksAPI.update(book, book.shelf).then(() => {
      this.reload();
    });

  };

  onBookAdded = () => {
    this.reload();
  };


  reload = async () => {
    const result = await BooksAPI.getAll();
    this.setState({
      books: {
        collection: [...result]
      }
    });
  }

  render() {
    if(this.state.books.collection.length === 0)
      return <div>Loading ... </div>;

    return (
        <Router>
          <div className="app">

            <Switch>
              <Route path="/search">
                <SearchScreen books={this.state.books.collection} onBookAdded={this.onBookAdded}></SearchScreen>
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
