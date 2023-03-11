import "./App.css";
import { useEffect, useState, useMemo, useDebounce } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPages";
import HomePage from "./pages/HomePage";
import * as BooksAPI from "./utilities/BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      if (!books.error) setBooks(books);
    });
  }, []);

  const categorizedBooks = useMemo(
    () => ({
      booksReading: books.filter((book) => book.shelf === "currentlyReading"),
      booksRead: books.filter((book) => book.shelf === "read"),
      booksWantToRead: books.filter((book) => book.shelf === "wantToRead"),
    }),
    [books]
  );

  return (
    <Routes>
      <Route exact path="/" element={<HomePage books={categorizedBooks} />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
