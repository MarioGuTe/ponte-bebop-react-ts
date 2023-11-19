import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import s from "./particle/style.module.css";

type Props = {
  refProp: React.MutableRefObject<HTMLElement | null>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ContactSection({ refProp }: Props, _ref: unknown) {
  return (
    <section className={s.contact_section} ref={refProp}>
      <ContactForm />
      <ContactInfo />
    </section>
  );
}

export default React.forwardRef(ContactSection);
