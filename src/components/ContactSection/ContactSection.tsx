import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import s from "./particle/style.module.css";

function ContactSection() {
  return (
    <section className={s.contact_section}>
      <ContactForm />
      <ContactInfo />
    </section>
  );
}

export default ContactSection;
