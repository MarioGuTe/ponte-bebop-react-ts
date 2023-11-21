import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import Modal from "../Modal/Modal";
import s from "./particle/style.module.css";

type Props = {
  refProp: React.MutableRefObject<HTMLElement | null>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ContactSection({ refProp }: Props, _ref: unknown) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <section className={s.contact_section} ref={refProp}>
      <ContactForm openModal={open} closeModal={close} modalState={modalOpen} />
      <ContactInfo />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
    </section>
  );
}

export default React.forwardRef(ContactSection);
