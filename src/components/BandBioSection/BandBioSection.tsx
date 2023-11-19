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
      <div className={s.bio_text_container}>
        <h2>BIOGRAFÍA</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          scelerisque rhoncus ligula vel vestibulum. Nulla mattis fermentum
          tellus vitae pretium. Aenean vitae tincidunt eros, eget tempus sem.
          Donec eu vulputate massa. Donec euismod malesuada est nec pretium.
          Fusce eu mi nec erat consequat volutpat. Nullam eget odio quis urna
          vulputate tristique. Duis volutpat dapibus justo, sed tempor dui
          tempor vel. Proin vel viverra arcu. Vestibulum vel turpis at ex
          tincidunt mattis. Aliquam eu pharetra nisl. Pellentesque odio lectus,
          tempor sodales tortor sit amet, vulputate maximus nibh. Donec vitae
          pretium nibh. In mollis venenatis arcu, quis porttitor mi euismod et.
        </p>
      </div>
      <div className={s.bio_img_container}>
        <img src={bioImage} alt="ponte-bebop-performing" loading="lazy" />
      </div>
    </section>
  );
}

export default React.forwardRef(BandBioSection);
