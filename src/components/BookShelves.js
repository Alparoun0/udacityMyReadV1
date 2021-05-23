 

 import React from 'react'
import Books from './books'
import { startCase } from "lodash";

const BookShelves = ({books, updateBook,shelves}) => {

 

  //console.log('inside shelfes',books);
return (
  <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div></div>
        {shelves.map(shelf =>
  <div className="bookshelf" key={shelf}>
    <h2 className="bookshelf-title"> {startCase(shelf)}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books
          .filter(book => book.shelf === shelf)
          .map(book => (
            <Books
              key={book.id}
              shelves={shelves}
              books={book}
              onChange={updateBook}
             />
          ))}
      </ol>
    </div>
  </div>)}</div></div>
);

}






export {  BookShelves as default}