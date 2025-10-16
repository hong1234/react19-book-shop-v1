import { Link, NavLink } from 'react-router-dom';

export function Header() {

  console.log('header rendering ..');
  return (
    <header className="">
      {/* <h1 className="text-2xl">React App</h1> */}
      {/* <nav>
        <Link
          to=""
          className="text-white no-underline p-1"
        >Home
        </Link>
        <Link
          to="products"
          className="text-white no-underline p-1"
        >| Products
        </Link>
      </nav> */}
      {/* <nav> 
        <NavLink
          to=""
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="books"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Books
        </NavLink>
      </nav> */}
      {/* <h4 className="bg-primary text-white text-center p-2"> */}
      
      <h4 className="bg-primary text-white p-2">Book Shop</h4>
      <Link to="">
        <button type="button" className="btn btn-primary">Home</button>
      </Link>
      <Link to="/shop/products">
        <button type="button" className="btn btn-primary">Shopping</button>
      </Link>
      <Link to="/admin/new">
        <button type="button" className="btn btn-primary">Admin</button>
      </Link>
      
    </header>
);
}