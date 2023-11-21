/* eslint-disable jsx-a11y/label-has-associated-control */
import { motion } from "framer-motion";
import useForm from "../../hooks/useForm";
import ContactButton from "../ContactButton/ContactButton";
import s from "./particle/style.module.css";

type Props = {
  openModal: () => void;
  closeModal: () => void;
  modalState: boolean;
};

function ContactForm({ openModal, closeModal, modalState }: Props) {
  const formik = useForm();

  const handleModalDisplay = () => {
    if (modalState) {
      closeModal();
    } else {
      openModal();
    }
  };

  return (
    <motion.form
      className={s.form}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formik.handleSubmit();
        handleModalDisplay();
      }}
    >
      <div className={s.form_title}>
        <h2>CONTACTO</h2>
      </div>
      <div className={s.input_container}>
        <input
          type="text"
          autoComplete="off"
          required
          name="user_name"
          value={formik.values.user_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="name" className={s.label_text}>
          <span className={s.span_text}>Nombre</span>
        </label>
      </div>
      <div className={s.input_container}>
        <input
          id="name"
          type="text"
          autoComplete="off"
          required
          name="user_email"
          value={formik.values.user_email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className={s.label_text}>
          <span className={s.span_text}>E-mail </span>{" "}
        </label>
      </div>
      <div className={s.message_container}>
        <label>
          <span>Mensaje</span>
        </label>
        <textarea
          className="contact_message"
          rows={4}
          cols={50}
          required
          name="user_message"
          value={formik.values.user_message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {}
        </textarea>
      </div>
      <ContactButton />
    </motion.form>
  );
}

export default ContactForm;
