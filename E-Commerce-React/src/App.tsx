import ForthSection from "./components/about/ForthSection";
import Footer from "./components/footer";
import NewArrivalSection from "./components/sections/NewArrivalSection";
import OurProducts from "./components/sections/OurProducts";
import TimerSection from "./components/sections/TimerSection";

function App() {
  return (
    <>
    <TimerSection/>
      <OurProducts />
      <NewArrivalSection />
      {/* About ForthSection */}
      <ForthSection />
      <Footer />
    </>
  );
}

export default App;
