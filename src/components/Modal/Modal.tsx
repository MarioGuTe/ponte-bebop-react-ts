import { motion } from "framer-motion";
import ModalBackdrop from "../ModalBackdrop/Backdrop";
import s from "./particle/style.module.css";

type Props = {
  handleClose: () => void;
};

function Modal({ handleClose }: Props) {
  return (
    <ModalBackdrop handleClose={handleClose}>
      <motion.div
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
        className={s.modal}
      >
        <p>
          Gracias por escribirnos! 😊 nos comunicaremos contigo a la brevedad
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className={s.dialog_button}
          onClick={handleClose}
        >
          REGRESAR
        </motion.button>
      </motion.div>
    </ModalBackdrop>
  );
}

export default Modal;
