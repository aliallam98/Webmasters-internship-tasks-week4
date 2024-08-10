import RedSectionHeading from "@/components/RedSectionHeading";
import categories from "../constants/Categories.json";
import { Link } from "react-router-dom";
const CategoriesPage = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <RedSectionHeading HeadingText="Categories" />
        <div className="flex justify-between items-center my-10">
          <h1 className="text-xl  lg:text-4xl font-semibold">
            Discover By Categories
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <Link to={`/category/${category.name.toLocaleLowerCase()}`} key={i}>
            <div className="bg-[#f5f5f5] h-[250px] grid place-content-center rounded-md">
              <img src={category.src} alt={category.name}  className="mx-auto"/>
              <h3 className="text-2xl text-designRedColor">{category.name} </h3>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
