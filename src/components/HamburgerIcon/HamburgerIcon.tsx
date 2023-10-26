/* eslint-disable react/self-closing-comp */
import s from "./particle/style.module.css";

interface Props {
  onItemClick: () => void;
}

function HamburgerIcon({ onItemClick }: Props) {
  return (
    <div className={s.burger_menu} onClick={onItemClick}>
      <div className="line_1 burger_child"></div>
      <div className="line_2 burger_child"></div>
      <div className="line_3 burger_child"></div>
      <div className="line_3 burger_child"></div>
    </div>
  );
}

export default HamburgerIcon;
