import CountDownTimer from "../CountDownTimer";
import { Button } from "../ui/button";

const TimerSection = () => {
  return (
    <section className="bg-[#000000] p-10 flex flex-col lg:flex-row items-center gap-32" >
        <div className="space-y-10">
            <h3 className="text-[#00ff66]">Categories</h3>
            <h1 className="text-4xl lg:text-7xl font-semibold text-white">Enhance Your <br />
            Music Experience</h1>
            <CountDownTimer/>
            <Button className="bg-[#00ff66] max-lg:w-full">Buy Now!</Button>
        </div>
      <img src="./images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="JBL_BOOMBOX" />
    </section>
  )
};

export default TimerSection
