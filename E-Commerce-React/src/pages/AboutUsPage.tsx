import FirstSection from "@/components/about/FirstSection";
import ForthSection from "@/components/about/ForthSection";
import SecondSection from "@/components/about/SecondSection";
import AboutSlider from "@/components/AboutSlider";

const AboutUsPage = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container space-y-20">
        <FirstSection />
        <SecondSection/>
        {/* Ask about slider */}
        <AboutSlider/>
        <ForthSection/>
      </div>
    </section>
  );
};

export default AboutUsPage;
