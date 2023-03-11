import { Link } from "react-router-dom";
import "../css/home.css";
import { ReactComponent as Add } from "../icons/add.svg";
import BookShelf from "../components/BookShelf";

function HomePage({ books }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {books.booksReading.length > 0 && (
            <BookShelf title="Currently Reading" books={books.booksReading} />
          )}
          {books.booksWantToRead.length > 0 && (
            <BookShelf title="Want to read" books={books.booksWantToRead} />
          )}
          {books.booksRead.length > 0 && (
            <BookShelf title="Read" books={books.booksRead} />
          )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <Add />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
