import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants";
import { Menu } from "lucide-react";
import NavbarLink from "./NavbarLink";
import Logo from "./Logo";

export function MobileLinks() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col items-center gap-4 mt-10">
          {navbarLinks.map((link, i) => (
            <NavbarLink heading={link.heading} href={link.href} key={i} />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
