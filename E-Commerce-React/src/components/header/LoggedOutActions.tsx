import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const LoggedOutActions = () => {
  return (
    <div>
      <Button asChild>
        <Link to={"/log-in"}>Log In</Link>
      </Button>
      <Button asChild variant={"ghost"}>
        <Link to={"/sign-up"}>Sign Up</Link>
      </Button>
    </div>
  )
};

export default LoggedOutActions
