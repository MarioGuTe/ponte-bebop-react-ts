import MembersCard from "../MembersCard/MembersCard";
import s from "./particle/style.module.css";

function MembersGallery() {
  return (
    <div className={s.members_gallery}>
      <MembersCard />
    </div>
  );
}

export default MembersGallery;
