import mainImg from "../../assets/images/ponte-bebop-hero.png";
import s from "./particle/style.module.css";

function HeroSection() {
  return (
    <section className={s.hero_container}>
      <img src={mainImg} alt="logo" />
    </section>
  );
}

export default HeroSection;
