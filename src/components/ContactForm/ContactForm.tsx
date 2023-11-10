/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import useForm from "../../hooks/useForm";
import ContactButton from "../ContactButton/ContactButton";
import s from "./particle/style.module.css";

function ContactForm() {
  const formik = useForm();

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
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
          type="text"
          autoComplete="off"
          required
          name="user_email"
          value={formik.values.user_email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="email" className={s.label_text}>
          <span className={s.span_text}>E-mail </span>{" "}
        </label>
      </div>
      <div className={s.message_container}>
        <label htmlFor="message">
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
        ></textarea>
      </div>
      <ContactButton />
    </form>
  );
}

export default ContactForm;
