import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="py-10 md:py-20 grid place-content-center gap-10 text-center">
      <h1 className="text-2xl md:text-9xl">404 Not Found</h1>
      <h3 className="text-xl md:text-xl">
        Your visited page not found. You may go home page.
      </h3>
      <Button className="bg-designRedColor hover:bg-designRedColor/90 w-[60%] mx-auto">
        <Link to={"/"}>Back to home page</Link>
      </Button>
    </section>
  );
};

export default NotFoundPage;
