import { Link } from "react-router";

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open Cart &arr;</Link>
    </div>
  );
}

export default CartOverview;
