import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <section>
        <h1 className="text-2xl md:text-5xl">404 Not Found</h1>
        <h3 className="text-xl md:text-2xl">Your visited page not found. You may go home page.</h3>
      <Button className="bg-designRedColor">Back to home page</Button>
    </section>
  )
};

export default NotFoundPage
