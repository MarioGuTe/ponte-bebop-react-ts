import data from "../../data/members.json";
import BioCardLinks from "../BioCardLinks/BioCardLinks";
import s from "./particle/style.module.css";

function BioCard() {
  return (
    <div className={s.card_container}>
      <div className={`${s.card} ${s.hidden}`}>
        <section className={s.profile_sidebar}>
          <picture>
            <img
              src={data.members[0].small_image}
              className={s.profile_image}
              alt=""
            />
          </picture>
        </section>
        <section className={s.profile_main}>
          <h2 className={s.profile_name}>{data.members[0].name}</h2>
          <p className={s.profile_body}>{data.members[0].description}</p>
          <BioCardLinks />
        </section>
      </div>
    </div>
  );
}

export default BioCard;
