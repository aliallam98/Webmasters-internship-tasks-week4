import ProfileForm from "./ProfileForm";
import ProfileSideBar from "./ProfileSideBar";

const MainProfile = () => {
  return (
    <section className="py-10 md:py-20 ">
      <div className="container flex gap-10">
        <ProfileSideBar />
        <ProfileForm />
      </div>
    </section>
  );
};

export default MainProfile;
