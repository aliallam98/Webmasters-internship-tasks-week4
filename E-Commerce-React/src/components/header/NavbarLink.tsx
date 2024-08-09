import { Link } from "react-router-dom";

const NavbarLink = ({ heading, href }: { heading: string; href: string }) => {
  return (
    <Link className="font-medium" to={href}>
      {heading}
    </Link>
  );
};

export default NavbarLink;
