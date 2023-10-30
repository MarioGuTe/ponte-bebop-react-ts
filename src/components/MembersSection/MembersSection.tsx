import MembersGallery from "../MembersGallery/MembersGallery";
import s from "./particle/style.module.css";

function MembersSection() {
  return (
    <section className={s.members_section}>
      <div className={s.title_container_integrantes}>
        <h2>INTEGRANTES</h2>
        <p>Te invitamos a conocer a la banda</p>
      </div>
      <MembersGallery />
    </section>
  );
}

export default MembersSection;
