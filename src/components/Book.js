import { ReactComponent as Select } from "../icons/arrow-drop-down.svg";

const Book = ({ book }) => {
  console.log(book);
  return (
    <div className="book">
      <div className="book-top">
        <img src={book.imageLinks.thumbnail} alt={book.subtitle} />
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>
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
        {book.authors && <span>{book.authors.join(" - ")}</span>}
      </div>
    </div>
  );
};

export default Book;
