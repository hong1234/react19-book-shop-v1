import { Link } from "react-router-dom";

function CartSummary({state}) {
  // console.log('cart summary rendering ..');
  return (
    <div className="">
      Items in Cart: {state.count} |
      <Link to="/shop/cart" className="">
        <button type="button" className="btn btn-primary">Go to Cart</button>|
      </Link>
    </div>
  );
}

export default CartSummary