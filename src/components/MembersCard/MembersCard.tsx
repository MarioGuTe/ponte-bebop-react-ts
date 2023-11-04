import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault();
    navigate("/bio");
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={s.members_card}
      onMouseDown={handleClick}
    >
      <div className={s.image_text}>
        <h3>{member.name}</h3>
        <p>{member.instrument}</p>
      </div>
      <img src={member.image} alt={`${member.name} ${member.instrument}`} />
    </div>
  );
}

export default MembersCard;
