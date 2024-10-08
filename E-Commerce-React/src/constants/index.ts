import FooterSaleInput from "@/components/footer/FooterSaleInput";
import FooterScanAndStores from "@/components/footer/FooterScanAndStores";
import FooterSocialIcons from "@/components/footer/FooterSocialIcons";

export const navbarLinks = [
  {
    heading: "Home",
    href: "/",
  },
  {
    heading: "Category",
    href: "/category",
  },
  {
    heading: "products",
    href: "/product",
  },
  {
    heading: "Contact",
    href: "/contact",
  },
  {
    heading: "About",
    href: "/about",
  },
];
export const footerItems = [
  {
    heading: "Exclusive",
    items: ["Subscribe", FooterSaleInput],
  },
  {
    heading: "Support",
    items: [
      "III Bijoy sarani, Dhaka,DH 1515, Bangladesh.",
      "exclusive@gmail.com",
      "+88015-88888-9999",
    ],
  },
  {
    heading: "Account",
    items: ["My Account", "Login / Register", "Cart", "Wishlist", "shop"],
  },
  {
    heading: "Quick Link",
    items: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
  },
  {
    heading: "Download App",
    items: [FooterScanAndStores, FooterSocialIcons],
  },
];

export const footerSocialIcons = [
  { src: "/images/footer/Icon-Facebook.png", alt: "Facebook" },
  { src: "/images/footer/icon-instagram.png", alt: "Instagram" },
  { src: "/images/footer/Icon-Linkedin.png", alt: "LinkedIn" },
  { src: "/images/footer/Icon-Twitter.png", alt: "Twitter" },
];

export const aboutSliderData = [
  { name:"Tom Cruise" , position:"Founder & Chairman", src: "/images/about/image 47.png", alt: "person" },
  { name:"Emma Watson" , position:"Managing Director", src: "/images/about/image 51.png", alt: "person" },
  { name:"Will Smith" , position:"Product Designer", src: "/images/about/image 46.png", alt: "person" },
  { name:"Tom Cruise" , position:"Founder & Chairman", src: "/images/about/image 47.png", alt: "person" },
  { name:"Emma Watson" , position:"Managing Director", src: "/images/about/image 51.png", alt: "person" },
  { name:"Will Smith" , position:"Product Designer", src: "/images/about/image 46.png", alt: "person" },

];
