import NavbarLink from "./NavbarLink";
import { navbarLinks } from "@/constants";
const NavBarLinks = () => {
  return (
    <ul className="hidden md:flex items-center gap-4">
      {navbarLinks.map((link, i) => (
        <NavbarLink heading={link.heading} href={link.href} key={i} />
      ))}
    </ul>
  );
};

export default NavBarLinks;
