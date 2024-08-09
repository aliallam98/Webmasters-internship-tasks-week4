import ForthSection from "./components/about/ForthSection";
import Footer from "./components/footer";
import Header from "./components/header";
import BestSellingSection from "./components/sections/BestSellingSection";
import BrowseByCategorySection from "./components/sections/BrowseByCategorySection";
import FlashSaleSection from "./components/sections/FlashSaleSection";
import NewArrivalSection from "./components/sections/NewArrivalSection";
import OurProducts from "./components/sections/OurProducts";
import TimerSection from "./components/sections/TimerSection";

function App() {
  return (
    <>
    <Header/>
      <FlashSaleSection />
      <BrowseByCategorySection/>
      <BestSellingSection />
      <TimerSection />
      <OurProducts />
      <NewArrivalSection />
      {/* About ForthSection */}
      <ForthSection />
      <Footer />
    </>
  );
}

export default App;
