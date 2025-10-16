import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">Checkout</h4>
      <Link to="/shop/cart">
        <button type="button" className="btn btn-primary">Return to Cart</button>
      </Link>
      <button type="button" className="btn btn-primary">Place Order</button>
    </div>
  )
}

export default Checkout