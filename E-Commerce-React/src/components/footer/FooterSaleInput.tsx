import { SendHorizontal } from "lucide-react";
import { Input } from "../ui/input";

const FooterSaleInput = () => {
  return (
    <>
      <p>Get 10% off your first order</p>
      <div className="relative border border-white rounded-md p-1 pr-8 bg-transparent mt-3">
        <Input
          placeholder="Enter your email"
          className="placeholder:text-[#3d3d3d] bg-transparent border-none w-full h-full"
        />
        <SendHorizontal className="absolute top-2.5 right-4" />
      </div>
    </>
  );
};

export default FooterSaleInput;
