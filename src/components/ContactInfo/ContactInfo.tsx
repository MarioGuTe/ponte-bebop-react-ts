import s from "./particle/style.module.css";

function ContactInfo() {
  return (
    <div className={s.contact_info_card}>
      <h2>Datos de Contacto</h2>
      <div className={s.contact_info_body}>
        <h3>Email</h3>
        <p>pontebebop@gmail.com</p>
        <h3>Número celular</h3>
        <p>+569 666666</p>
      </div>
    </div>
  );
}

export default ContactInfo;
