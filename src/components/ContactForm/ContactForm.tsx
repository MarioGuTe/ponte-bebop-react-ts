/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */

function ContactForm() {
  return (
    <form className="form hidden">
      <div className="form-title">
        <h2>CONTACTO</h2>
      </div>
      <div className="input-container">
        <input
          type="text"
          className="contact-name"
          autoComplete="off"
          required
        />
        <label htmlFor="name" className="label-text">
          <span className="span-text">Nombre</span>
        </label>
      </div>
      <div className="input-container">
        <input
          type="text"
          className="contact-email"
          autoComplete="off"
          required
        />
        <label htmlFor="email" className="label-text">
          <span className="span-text">E-mail</span>
        </label>
      </div>
      <div className="message-container">
        <label htmlFor="name" className="label-textarea">
          <span className="textarea-span-text">Mensaje</span>
        </label>
        <textarea
          id="freeform"
          className="contact-message"
          rows={4}
          cols={50}
          required
        ></textarea>
      </div>
      <div className="submit-btn-container">
        <button type="submit" className="submit-btn">
          ENVIAR
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
