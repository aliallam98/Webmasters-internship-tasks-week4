import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  coupon: z.string(),
});

const CartCoupon = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coupon: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex items-center gap-6 w-full max-w-[400px] h-fit mb-4 lg:mb-0"
      >
        <FormField
          control={form.control}
          name="coupon"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl >
                <Input placeholder="Coupon Code" {...field} className="border-black"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-designRedColor hover:bg-designRedColor/90 w-[30%] !mt-0"
          type="submit"
        >
          Apply coupon
        </Button>
      </form>
    </Form>
  );
};

export default CartCoupon;
