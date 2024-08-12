import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const ProfileSideBar = () => {
  const {pathname} = useLocation()
  return (
    <aside className="flex flex-col gap-6 p-4">
      <div>
        <h2 className="text-xl font-semibold mb-6">Manage My Account</h2>
        <div className="flex flex-col gap-2">
          <Link className={cn("text-[#808080]", pathname === "/profile" && "text-designRedColor" )}to={"/profile"}>My Profile</Link>
          <Link className="text-[#808080]" to={"/"}>Address Book</Link>
          <Link className="text-[#808080]" to={"/"}>My Payment Options</Link>
        </div>
      </div>
      <div >
        <h2 className="text-xl font-semibold mb-6">My Orders</h2>
        <div className="flex flex-col gap-2">
          <Link className="text-[#808080]" to={"/"}>My Orders</Link>
          <Link className="text-[#808080]" to={"/"}>My Returns</Link>
          <Link className="text-[#808080]" to={"/"}>My Cancellations</Link>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSideBar;
