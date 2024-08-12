import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const NavbarLink = ({ heading, href }: { heading: string; href: string }) => {
  const {pathname} = useLocation()
  return (
    <Link className={cn("font-medium",
      pathname === href && "text-designRedColor"

    )} to={href}>
      {heading}
    </Link>
  );
};

export default NavbarLink;
