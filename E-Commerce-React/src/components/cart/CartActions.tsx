import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CartActions = () => {
  return (
    <div className="flex items-center justify-between">
      <Button className="" variant={"outline"}>
        <Link to="/product">
        Return To Shop
        </Link>
      </Button>
      <Button className="" variant={"outline"}>Update Cart</Button>
    </div>
  )
};

export default CartActions
