import { Link } from "react-router-dom";

function ProductList({books}) {
  // console.log('books-page rendering ..');

  if (!Array.isArray(books)) {
    return (
      <> </>
    );
  }

  return (
    <div className="">
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            <Link to={`${book.id}`} >{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList