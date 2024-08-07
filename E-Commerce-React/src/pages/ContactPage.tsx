import ContactForm from "@/components/contact/ContactForm";
import ContactInformation from "@/components/contact/ContactInformation";

const ContactPage = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container grid md:flex  gap-10">
        <ContactInformation />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
