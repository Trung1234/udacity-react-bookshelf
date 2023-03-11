
import { useNavigate } from "react-router-dom";
import '../css/search.css';


const SearchPage = ()=> {
    const navigate = useNavigate();

    return (
        <div className="search-books">         
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => navigate("/")}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
    );
    
};

export default SearchPage;