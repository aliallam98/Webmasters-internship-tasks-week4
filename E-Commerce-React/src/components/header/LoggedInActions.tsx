import UserActions from "./UserActions";
import WishListButton from "./WishListButton";

const LoggedInActions = () => {
  return (
    <div className="flex items-center gap-2">
      <WishListButton />
      <UserActions/>
    </div>
  );
};

export default LoggedInActions;
