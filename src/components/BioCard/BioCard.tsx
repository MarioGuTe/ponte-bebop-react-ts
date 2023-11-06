import { useMemberContext } from "../../contexts/MemberContext";
import BioCardLinks from "../BioCardLinks/BioCardLinks";
import s from "./particle/style.module.css";

function BioCard() {
  const { memberCard } = useMemberContext();

  return (
    <div className={s.card_container}>
      <div className={`${s.card} ${s.hidden}`}>
        <section className={s.profile_sidebar}>
          <picture>
            <img
              src={memberCard.small_image}
              className={s.profile_image}
              alt=""
            />
          </picture>
        </section>
        <section className={s.profile_main}>
          <h2 className={s.profile_name}>{memberCard.name}</h2>
          <p className={s.profile_body}>{memberCard.description}</p>
          <BioCardLinks
            instagram={memberCard.instagram}
            mail={memberCard.mail}
            whatsapp={memberCard.whatsapp}
          />
        </section>
      </div>
    </div>
  );
}

export default BioCard;
