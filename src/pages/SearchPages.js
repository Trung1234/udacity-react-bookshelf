import { useEffect, useState } from "react";
import "../css/search.css";
import * as bookService from "../services/bookService";
import BookShelf from "../components/BookShelf";
import useDebounce from "../hooks/useDebounce";

const SearchPage = ({ booksOnShelf, updateBookShelf }) => {
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const searchDebounced = useDebounce(searchResult, 500);

  useEffect(() => {
    if (searchDebounced) {
      bookService.searchBook(searchDebounced).then((data) => {
        if (!data.error) {
          setBooks(data);
        } else setBooks("");
      });
    } else {
      setBooks([]);
    }
  }, [searchDebounced]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchResult}
            onChange={(event) => setSearchResult(event.target.value)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        {books === "" ? (
          <h2>No Results Found</h2>
        ) : (
          books.length > 0 && (
            <BookShelf
              title="Search result"
              books={books}
              booksOnShelf={booksOnShelf}
              updateBookShelf={updateBookShelf}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
