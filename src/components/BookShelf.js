import Book from "./Book";

const BookShelf = ({books, booksOnShelf, title, updateBookShelf }) => {
  // const { books, booksOnShelf, title, updateBookShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <li key={index}>
              <Book book={book} updateBookShelf={updateBookShelf} booksOnShelf={booksOnShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
