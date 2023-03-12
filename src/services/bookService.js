import * as BooksAPI from "../api/BooksAPI";

export const onChangeBookShelf = (shelf, updateBookShelf, book) => {
  BooksAPI.update(book, shelf).then((data) => {
    if (!data.error) {
      book.shelf = shelf;
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
