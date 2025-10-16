import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AppContext } from "../AppContext";

function Cart() {
  // const { count, setCount } = useContext(AppContext);
  const { state, dispatch } = useContext(AppContext);
  
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">Cart</h4>
      <Link to="/shop/products">
        <button type="button" className="btn btn-primary">Continue Shopping</button>
      </Link>
       <Link to="/shop/checkout">
        <button type="button" className="btn btn-primary">Checkout</button>
      </Link>
      <div className="">
        <ul className="list-group">
          {state.books.map((book) => (
            <li key={book.id} className="list-group-item">
              <p className="fw-bold">ID {book.dbid}</p>
              <p className="">{book.title}</p>
              <button onClick={() => dispatch({type:'delete', payload:book})}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Cart