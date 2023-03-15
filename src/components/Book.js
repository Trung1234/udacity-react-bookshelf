import * as bookService from "../services/bookService";

const Book = (props) => {
  const { book, updateBookShelf, booksOnShelf }= props;
  //console.log("book",book);
  if (booksOnShelf && !book.shelf) {
    const bookOnShelf = booksOnShelf.find((element) => element.id === book.id);
    //When a book is on a bookshelf,
    //it should have the same state on both the main application page
    // and the search page. 
    if (bookOnShelf) {
      book.shelf = bookOnShelf.shelf;
    } 
  }

  
  const onChangeBookShelf= (e)=>{
    const shelf = e.target.value;
    bookService.onChangeBookShelf(shelf, updateBookShelf, book);
  }

  return (
    <div className="book">
      <div className="book-top">
         {(book.imageLinks  &&  book.imageLinks.thumbnail) &&  (
            <img src={book.imageLinks.thumbnail} alt={book.subtitle} />
          )}
        
        <div className="book-shelf-changer">
          <select value={book.shelf || "none"} onChange={onChangeBookShelf}>
            <option value="0" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && <span>{book.authors.join(",")}</span>}
      </div>
    </div>
  );
};

export default Book;
