import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPages";
import HomePage from "./pages/HomePage";
import * as bookService from "./services/bookService";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll().then((data) => {
      if (!data.error) {
        setBooks(data);
      }   
    });
  }, []);

  
  const updateBookShelf= (book) => {
		const updatedBooks = [...books.filter(element => element.id !== book.id), book]
		setBooks(updatedBooks);
	};

  return (
    <Routes>
      <Route exact path="/" element={<HomePage books={books} updateBookShelf={updateBookShelf}/>} />
      <Route path="/search" element={<SearchPage booksOnShelf={books} updateBookShelf={updateBookShelf}/>} />
    </Routes>
  );
}

export default App;
