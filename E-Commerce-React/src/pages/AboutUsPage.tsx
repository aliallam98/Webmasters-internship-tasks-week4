import FirstSection from "@/components/about/FirstSection";
import ForthSection from "@/components/about/ForthSection";
import SecondSection from "@/components/about/SecondSection";

const AboutUsPage = () => {
  return (
    <section>
      <div className="container">
        <FirstSection />
        <SecondSection/>
        {/* Ask about slider */}
        <ForthSection/>
      </div>
    </section>
  );
};

export default AboutUsPage;
