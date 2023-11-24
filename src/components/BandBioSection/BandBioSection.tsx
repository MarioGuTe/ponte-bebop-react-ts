import React from "react";
import bioImage from "../../assets/images/bio-b-w.jpg";
import s from "./particle/style.module.css";

type Props = {
  refProp: React.MutableRefObject<HTMLElement | null>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BandBioSection({ refProp }: Props, _ref: unknown) {
  return (
    <section className={s.band_bio_section} ref={refProp}>
      <h2>BIOGRAFÍA</h2>
      <div className={s.bio_main_container}>
        <p className={s.text_1}>
          PonteBebop es un cuarteto de jazz formado en 2022 en Santiago de
          Chile. Tiene la particularidad explorar y rescatar el característico
          sonido &quot;Bebop&quot; el cual gozó de gran popularidad en
          Norteamérica en las décadas de los 40&apos;s y 50&apos;s de la mano de
          los grandes referentes del estilo como Charlie Parker, Bud Powell y
          Dizzy Gillespie por mencionar algunos.
        </p>
        <p className={s.text_2}>
          PonteBebop está compuesta por Benny Gómez en Batería, Nicolás Perales
          en Contrabajo, Mario Gutiérrez en Guitarra Eléctrica quiénes se
          conocieron como estudiantes de I.P Projazz institución de gran
          trayectoria en la formación de músicos, el cuarteto se completa con la
          incorporación de Emilio Hartard en Piano el cuál les entrega un nuevo
          aire.
        </p>
        <p className={s.text_3}>
          La banda ha demostrado su energía en vivo en diferentes escenarios,
          Jam Sessions e instancias de la noche capitalina destacando por su
          natural capacidad de improvisación, pulida técnica y un variado
          repertorio de clásicos del &quot;Great American SongBook&quot; sin
          perder la frescura y soltura las cuáles son características esenciales
          del Jazz y especialmente del Bebop
        </p>
        <div className={s.bio_img_container}>
          <img src={bioImage} alt="ponte-bebop-performing" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default React.forwardRef(BandBioSection);
