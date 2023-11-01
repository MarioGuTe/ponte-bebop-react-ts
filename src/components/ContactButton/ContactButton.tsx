import s from "./particle/style.module.css";

function ContactButton() {
  return (
    <div className={s.submit_btn_container}>
      <button type="submit" className={s.submit_btn}>
        ENVIAR
      </button>
    </div>
  );
}

export default ContactButton;
