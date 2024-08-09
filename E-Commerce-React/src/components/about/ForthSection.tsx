





const sectionData = [
    {
      iconSrc: "/images/about/icon-delivery.png",
      amount: "FREE AND FAST DELIVERY",
      text: "free delivery for all orders over $146",
    },
    {
      iconSrc: "/images/about/Icon-Customer service.png",
      amount: "24/7 CUSTOMER SERVICE",
      text: "Friendly 2417 customer support",
    },
    {
      iconSrc: "/images/about/Icon-secure.png",
      amount: "MONEY BACK GUARANTEE",
      text: "We reurn money within 30 days",
    },
  ];
const ForthSection = () => {
  return (
<div className="grid lg:grid-cols-3 gap-16 px-20 py-10 md:py-20">
      {sectionData.map((item, i) => (
        <div
          className="flex flex-col items-center justify-center gap-4 p-4 hover:bg-[#db4444]  rounded-md transition group"
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
  )
};

export default ForthSection
