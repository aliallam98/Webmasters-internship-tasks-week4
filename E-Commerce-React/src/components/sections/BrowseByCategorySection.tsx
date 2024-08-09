import CategorySlider from "../CategorySlider";
import RedSectionHeading from "../RedSectionHeading";

const BrowseByCategorySection = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container space-y-6">
        <RedSectionHeading HeadingText="categories" />
        <h1 className="font-semibold text-3xl ">Browse By Category</h1>
        <CategorySlider/>
      </div>
    </section>
  );
};

export default BrowseByCategorySection;
