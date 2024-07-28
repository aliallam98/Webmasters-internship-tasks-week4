import { footerItems } from "@/constants";
import FooterCol from "./FooterCol";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container py-10 sm:py-14 md:py-20 grid gap-16 sm:grid-cols-2 xl:grid-cols-5">
        {footerItems.map((item, i) => (
          <FooterCol headingText={item.heading} key={i}>
            {item.items.map((subItem, j) => (
              <FooterItem key={j}>
                {typeof subItem === "function" ? subItem() : subItem}
              </FooterItem>
            ))}
          </FooterCol>
        ))}
      </div>
      <div className="text-center border-t border-[#3d3d3d]">
        <p className="text-[#3d3d3d] py-4">
          &copy; Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
