import React from "react";
import MembersGallery from "../MembersGallery/MembersGallery";
import s from "./particle/style.module.css";

type Props = {
  refProp: React.MutableRefObject<HTMLElement | null>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MembersSection({ refProp }: Props, _ref: unknown) {
  return (
    <section className={s.members_section} ref={refProp}>
      <div className={s.title_container_integrantes}>
        <h2>INTEGRANTES</h2>
        <p>Te invitamos a conocer a la banda</p>
      </div>
      <MembersGallery />
    </section>
  );
}

MembersSection.displayName = "MembersSection";

export default React.forwardRef(MembersSection);
