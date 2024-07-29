const sectionData = [
  {
    iconSrc: "/images/about/icon_shop.png",
    amount: "10.5k",
    text: "Sallers active our site",
  },
  {
    iconSrc: "/images/about/Icon-Moneybag.png",
    amount: "10.5k",
    text: "Sallers active our site",
  },
  {
    iconSrc: "/images/about/Icon-Shopping bag.png",
    amount: "10.5k",
    text: "Sallers active our site",
  },
  {
    iconSrc: "/images/about/Icon-Moneybag.png",
    amount: "10.5k",
    text: "Sallers active our site",
  },
];

const SecondSection = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-16 ">
      {sectionData.map((item, i) => (
        <div
          className="flex flex-col items-center justify-center gap-4 p-4 hover:bg-[#db4444] border border-[#3b3b3b3] rounded-md transition group"
          key={i}
        >
          <div className="p-2 bg-black group-hover:bg-white border-4 rounded-full w-fit  transition border-[#c1c1c1] group-hover:border-[#e67c7c] ">
            <img
              src={item.iconSrc}
              alt={item.text}
              className="group-hover:invert transition "
            />
          </div>
          <h2>{item.amount}</h2>
          <h3>{item.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default SecondSection;
