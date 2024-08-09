import CartButton from "./CartButton";
import WishListButton from "./WishListButton";

const LoggedInActions = () => {
  return (
    <div className="flex items-center gap-2">
      <WishListButton />
      <CartButton />
    </div>
  );
};

export default LoggedInActions;
