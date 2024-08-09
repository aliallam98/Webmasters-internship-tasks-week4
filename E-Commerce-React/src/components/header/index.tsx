import LoggedInActions from "./LoggedInActions";
import LoggedOutActions from "./LoggedOutActions";
import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";

const Header = () => {
  const isUserLoggedIn = true;
  return (
    <header className="border-b ">
      <div className="relative bg-black p-2 text-white text-center  flex">
        <p className=" w-full ">
          Summer Sale For All Swim Suits And Free Express Delivery — OFF 
          50%!  ShopNow{" "}
        </p>
        <span className="absolute right-32">English</span>
      </div>

      <nav className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-10">
          <Logo />
          <NavBarLinks />
        </div>
        <div>
          {!isUserLoggedIn && <LoggedOutActions />}
          {isUserLoggedIn && <LoggedInActions />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
