import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import s from "./particle/style.module.css";

type Props = {
  instagram: string;
  mail: string;
  whatsapp: string;
};

function BioCardLinks({ instagram, mail, whatsapp }: Props) {
  return (
    <div className={s.links_section}>
      <h3>PARA CLASES O CONSULTAS</h3>
      <div className={s.icons_container}>
        <Link to={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link to={mail} target="_blank" rel="noopener noreferrer">
          <AiOutlineMail />
        </Link>
        <Link to={whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
}

export default BioCardLinks;
