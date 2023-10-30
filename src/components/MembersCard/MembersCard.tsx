import s from "./particle/style.module.css";

interface Props {
  member: {
    name: string;
    description: string;
    instrument: string;
    image: string;
    small_image: string;
    instagram: string;
    mail: string;
    whatsapp: string;
  };
}

function MembersCard({ member }: Props) {
  return (
    <div className={s.members_card}>
      <div className={s.image_text}>
        <h3>{member.name}</h3>
        <p>{member.instrument}</p>
      </div>
      <img src={member.image} alt={`${member.name} ${member.instrument}`} />
    </div>
  );
}

export default MembersCard;
