import * as BooksAPI from "../api/BooksAPI";

export const onChangeBookShelf = (shelf, updateBookShelf, book) => {
  book.shelf = shelf;
  BooksAPI.update(book, shelf).then((data) => {
    if (!data.error) {     
      updateBookShelf(book);
    }
  });
};

export const getAll = () => {
  return BooksAPI.getAll();
};

export const searchBook = (query) => {
  return BooksAPI.search(query);
};
