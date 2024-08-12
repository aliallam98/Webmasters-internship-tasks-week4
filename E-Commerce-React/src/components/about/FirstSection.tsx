const FirstSection = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center">
      <div className="space-y-10 text-center lg:text-start">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">
          Our Story
        </h1>
        <p className="max-w-[500px] max-lg:mx-auto ">
          Launced in 2015, Exclusive is South Asia's premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p className="max-w-[500px] max-lg:mx-auto ">
          Exclusive has more than I Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <img src="/images/about/aboutus.png" alt="about us image" className="mx-auto mt-6 lg:mt-0"/>
    </div>
  );
};

export default FirstSection;
