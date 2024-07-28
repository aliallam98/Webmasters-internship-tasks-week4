import { footerSocialIcons } from "@/constants";

const FooterSocialIcons = () => {
  return (
    <div className="flex items-center gap-4 mt-10 justify-center sm:justify-start">
      {footerSocialIcons.map((item, i) => (
        <img src={item.src} alt={item.alt} key={i} />
      ))}
    </div>
  );
};

export default FooterSocialIcons;
