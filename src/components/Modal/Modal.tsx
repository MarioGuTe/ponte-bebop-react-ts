import { motion } from "framer-motion";
import ModalBackdrop from "../ModalBackdrop/Backdrop";
import s from "./particle/style.module.css";

type Props = {
  handleClose: () => void;
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function Modal({ handleClose }: Props) {
  return (
    <ModalBackdrop handleClose={handleClose}>
      <motion.div
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
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
