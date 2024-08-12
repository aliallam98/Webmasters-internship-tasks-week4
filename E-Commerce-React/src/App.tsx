import ForthSection from "./components/about/ForthSection";
import MainSectionAndSidebar from "./components/MainSectionAndSidebar";
import BestSellingSection from "./components/sections/BestSellingSection";
import BrowseByCategorySection from "./components/sections/BrowseByCategorySection";
import FlashSaleSection from "./components/sections/FlashSaleSection";
import NewArrivalSection from "./components/sections/NewArrivalSection";
import OurProducts from "./components/sections/OurProducts";
import TimerSection from "./components/sections/TimerSection";

function App() {
  return (
    <>
    <MainSectionAndSidebar/>
      <FlashSaleSection />
      <BrowseByCategorySection />
      <BestSellingSection />
      <TimerSection />
      <OurProducts />
      <NewArrivalSection />
      {/* About ForthSection */}
      <ForthSection />
    </>
  );
}

export default App;
