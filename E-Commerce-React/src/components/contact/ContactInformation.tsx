import { Mail, Phone } from "lucide-react";

const ContactInformation = () => {
  return (
    <div>
      <div className="border-b space-y-4 pb-10">
        <div className="flex items-center gap-6">
          <span className="grid place-content-center p-1 rounded-full size-10 text-white bg-designRedColor ">
            <Phone  />
          </span>
          <p className="font-semibold">Call To Us</p>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +880161112222</p>
      </div>
      <div className="space-y-4 py-10">
        <div className="flex items-center gap-6">
          <span className="grid place-content-center p-1 rounded-full size-10 text-white bg-designRedColor ">
            <Mail />
          </span>
          <p className="font-semibold"  >write To US</p>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default ContactInformation;
