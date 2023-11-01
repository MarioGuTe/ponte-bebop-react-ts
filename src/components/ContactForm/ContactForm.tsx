/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import s from "./particle/style.module.css";

function ContactForm() {
  return (
    <form className={s.form}>
      <div className={s.form_title}>
        <h2>CONTACTO</h2>
      </div>
      <div className={s.input_container}>
        <input type="text" autoComplete="off" required />
        <label htmlFor="name" className={s.label_text}>
          <span className={s.span_text}>Nombre</span>
        </label>
      </div>
      <div className={s.input_container}>
        <input type="text" autoComplete="off" required />
        <label htmlFor="email" className={s.label_text}>
          <span className={s.span_text}>E-mail</span>
        </label>
      </div>
      <div className={s.message_container}>
        <label htmlFor="name">
          <span>Mensaje</span>
        </label>
        <textarea
          id="freeform"
          className="contact_message"
          rows={4}
          cols={50}
          required
        ></textarea>
      </div>
      <div className="submit_btn_container">
        <button type="submit" className="submit_btn">
          ENVIAR
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
