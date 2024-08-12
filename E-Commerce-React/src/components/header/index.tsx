import LoggedInActions from "./LoggedInActions";
import LoggedOutActions from "./LoggedOutActions";
import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";
import CartButton from "./CartButton";
import { useCurrentUser } from "@/contexts/CurrentUserContext";
import { MobileLinks } from "./MobileLinks";
const Header = () => {
  const isUserLoggedIn = useCurrentUser();
  return (
    <header className="relative border-b ">
      <div className="relative bg-black p-2 text-white text-center  flex">
        <p className="w-full text-xm lg:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery — OFF 50%!
          ShopNow{" "}
        </p>
        <span className="hidden lg:block absolute right-4 text-xm lg:text-base lg:right-20 xl:right-20  ">
          English
        </span>
      </div>

      <nav className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-10">
          <Logo />
          <NavBarLinks />
          <div className="absolute bottom-0 block lg:hidden size-5">
            <MobileLinks />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CartButton />
          {!isUserLoggedIn && <LoggedOutActions />}
          {isUserLoggedIn && <LoggedInActions />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
