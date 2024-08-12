import ProfileForm from "./ProfileForm";
import ProfileSideBar from "./ProfileSideBar";

const MainProfile = () => {
  return (
    <section className="py-10 md:py-20">
      <ProfileSideBar/>
      <ProfileForm/>
    </section>
  )
};

export default MainProfile
