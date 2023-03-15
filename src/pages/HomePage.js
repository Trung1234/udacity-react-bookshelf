import { Link } from "react-router-dom";
import "../css/home.css";
import {  useMemo } from "react";
import BookShelf from "../components/BookShelf";

function HomePage(props) {
  const { books,updateBookShelf } = props;
  const categorizedBooks = useMemo(
    () => ({
      booksReading: books.filter((book) => book.shelf === "currentlyReading"),
      booksRead: books.filter((book) => book.shelf === "read"),
      booksWantToRead: books.filter((book) => book.shelf === "wantToRead"),
    }),
    [books]
  );

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {categorizedBooks.booksReading.length > 0 && (
            <BookShelf title="Currently Reading" updateBookShelf={updateBookShelf}  books={categorizedBooks.booksReading} />
          )}
          {categorizedBooks.booksWantToRead.length > 0 && (
            <BookShelf title="Want to read" updateBookShelf={updateBookShelf} books={categorizedBooks.booksWantToRead} />
          )}
          {categorizedBooks.booksRead.length > 0 && (
            <BookShelf title="Read"  updateBookShelf={updateBookShelf} books={categorizedBooks.booksRead} />
          )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
