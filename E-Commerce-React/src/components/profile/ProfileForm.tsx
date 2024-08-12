import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/contexts/CurrentUserContext";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "company name must be at least 2 characters." }),
  email: z
    .string()
    .min(2, { message: "Address must be at least 2 characters." }),
  address: z
    .string()
    .min(2, { message: "apartment must be at least 2 characters." }),
  currentPassword: z
    .string()
    .min(2, { message: "town must be at least 2 characters." }),
  newPassword: z
    .string()
    .min(2, { message: "phone must be at least 2 characters." }),
  confirmNewPassword: z
    .string()
    .min(2, { message: "email must be at least 2 characters." }),
});

const ProfileForm = () => {
  const currentUser = useCurrentUser()
  console.log(currentUser);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName:currentUser.name.split(" ")[0] || "",
      lastName:currentUser.name.split(" ")[1] ||"",
      email: currentUser.emailOrPhone || "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1 max-w-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="bg-[#f5f5f5]" placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="bg-[#f5f5f5]" placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="bg-[#f5f5f5]" placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="bg-[#f5f5f5]" placeholder="address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-[#f5f5f5]" placeholder="Current Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-[#f5f5f5]" placeholder="New Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-[#f5f5f5]" placeholder="Confirm new password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ProfileForm;
