import { Button } from "../ui/button";

const NewArrivalSection = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container grid lg:grid-cols-2 gap-6 ">
        <div className="relative bg-[#0d0d0d] grid place-content-center p-4">
          <img
            src="/images/new-arrival/ps5-slim-goedkope-playstation_large 1.png"
            alt="playstation_large"
          />
          <div className="absolute bottom-10 left-10 text-white space-y-4 ">
            <h3 className="text-2xl font-semibold">PlayStation 5</h3>
            <p className="">
              Black an W ite version of he PS5 <br />
              coming ut on sale.
            </p>
            <Button className="text-white  " variant={"link"}>
              Shop Now
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative bg-[#0d0d0d]  grid place-content-center p-4">
            <img
              src="/images/new-arrival/attractive-woman-wearing-hat-posing-black-background 1 (1).png"
              alt="playstation_large"
            />
            <div className="absolute bottom-10 left-10 text-white space-y-4 ">
              <h3 className="text-2xl font-semibold">Women's Collections</h3>
              <p className="">
                Featured woman collections that
                <br />
                give you another vibe.{" "}
              </p>
              <Button className="text-white  " variant={"link"}>
                Shop Now
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative bg-[#0d0d0d]  grid place-content-center p-4">
              <img
                src="/images/new-arrival/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                alt="playstation_large"
              />
              <div className="absolute bottom-10 left-10 text-white space-y-4 ">
                <h3 className="text-2xl font-semibold">Speakers</h3>
                <p className="">mazon wireless spea</p>
                <Button className="text-white  " variant={"link"}>
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="relative bg-[#0d0d0d]  grid place-content-center p-4">
              <img
                src="/images/new-arrival/652e82cd70aa6522dd785109a455904c.png"
                alt="playstation_large"
              />
              <div className="absolute bottom-10 left-10 text-white space-y-4 ">
                <h3 className="text-2xl font-semibold">Perfume</h3>
                <p className="">GUCCI INTENSEO OUD EDP</p>
                <Button className="text-white  " variant={"link"}>
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
