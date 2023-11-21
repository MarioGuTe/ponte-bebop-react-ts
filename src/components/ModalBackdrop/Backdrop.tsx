import { motion } from "framer-motion";
import s from "./particle/syle.module.css";

type Props = {
  children: React.ReactNode;
  handleClose: () => void;
};

function ModalBackdrop({ children, handleClose }: Props) {
  return (
    <motion.div
      className={s.backdrop}
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default ModalBackdrop;
