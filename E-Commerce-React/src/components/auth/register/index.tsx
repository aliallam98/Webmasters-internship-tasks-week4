// import { Link } from "react-router-dom";
import PicturePart from "../PicturePart";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2, { message: "This field has to be filled." }).max(50),
  emailOrPhone: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(6, {
      message: "Password should be 6 chars atleast",
    })
    .max(50),
});

const RegisterForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailOrPhone: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const currentUser = JSON.parse(localStorage.getItem("Current-User") as string)
    if(currentUser.emailOrPhone !== values.emailOrPhone){
      localStorage.setItem("Current-User", JSON.stringify(values));
      navigate("/login");
    }
    form.setError("password",{
      message:"This email already in use"
    }) 
  }
  return (
    <div className="grid  md:grid-cols-2 items-center py-10">
      <PicturePart src="/images/form/Side Image.png" />
      <div className="pl-20 space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Create an account
          </h2>
          <p className="mt-1 text-muted-foreground">Enter your details below</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[70%] "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="border-t-0 border-l-0 border-r-0 border-b-2 shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailOrPhone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email or phone"
                      {...field}
                      className="border-t-0 border-l-0 border-r-0 border-b-2 shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                      className="border-t-0 border-l-0 border-r-0 border-b-2 shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full bg-designRedColor hover:bg-designRedColor/90"
              >
                Create Account
              </Button>
              <Button variant="outline" className="w-full border-[#999999]">
                Sign in with Google
              </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link className="underline" to={"/login"}>
                Log In
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
