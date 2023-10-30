import MembersCard from "../MembersCard/MembersCard";
import data from "../../data/members.json";
import s from "./particle/style.module.css";

function MembersGallery() {
  return (
    <div className={s.members_gallery}>
      {data.members.map((member) => (
        <MembersCard key={member.name} member={member} />
      ))}
    </div>
  );
}

export default MembersGallery;
