import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
  } from "@/components/ui/popover";
  import { CircleUser, LogOut, Settings, User, X } from "lucide-react";
  import { Button } from "../ui/button";
  import { Link, useLocation, useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

  const UserActions = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate();
    const onClickHandler = async () => {
    };
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn("h-fit p-1 md:p-2",
                pathname === "/profile" && "bg-designRedColor text-white rounded-full"
            )}
            variant={"ghost"}
          >
            <User />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="py-8 px-4">
          <PopoverClose className="absolute right-2 top-2">
            <X />
          </PopoverClose>
          <div>
            <Button
              asChild
              variant={"ghost"}
              className="w-full flex justify-start items-center gap-4"
            >
              <Link to={"/profile"}>
                <CircleUser size={20} className="text-muted-foreground" /> Profile
              </Link>
            </Button>
            <Separator />
            <Button
              asChild
              variant={"ghost"}
              className="w-full flex justify-start items-center gap-4"
            >
              <Link to={"/settings"}>
                <Settings size={20} className="text-muted-foreground" /> Settings
              </Link>
            </Button>
          </div>
          <Separator />
          <Button
            variant={"ghost"}
            className="w-full"
            onClick={onClickHandler}
          >
            Log Out <LogOut className="w-4 h-4 ml-auto text-muted-foreground" />
          </Button>
        </PopoverContent>
      </Popover>
    );
  };
  
  export default UserActions;
  