import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const WishListButton = () => {
  const {pathname} = useLocation()
  return (
    <Button asChild className={cn("h-fit p-1 md:p-2" ,
      pathname === "/wishlist" && "bg-designRedColor text-white rounded-full"
    )}variant={"ghost"}>
      <Link to={"/wishlist"}>
        <Heart />
      </Link>
    </Button>
  );
};

export default WishListButton;
