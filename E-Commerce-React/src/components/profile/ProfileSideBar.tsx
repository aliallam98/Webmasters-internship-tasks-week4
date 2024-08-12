import { Link } from "react-router-dom";

const ProfileSideBar = () => {
  return (
    <aside>
      <div>
        <h2 className="text-xl font-semibold">Manage My Account</h2>
        <div>
          <Link className="text-[#808080]" to={"/"}>My Profile</Link>
          <Link className="text-[#808080]" to={"/"}>Address Book</Link>
          <Link className="text-[#808080]" to={"/"}>My Payment Options</Link>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">My Orders</h2>
        <div>
          <Link className="text-[#808080]" to={"/"}>My Orders</Link>
          <Link className="text-[#808080]" to={"/"}>My Returns</Link>
          <Link className="text-[#808080]" to={"/"}>My Cancellations</Link>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSideBar;
