import { motion } from "framer-motion";
import Backdrop from "/components/backdrop/backdrop";
import styles from "./modal.module.scss";
import core from "/styles/core.module.scss";

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

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.modal}
      >
        <p>{text}</p>
        <button onClick={handleClose} className={core.button}>
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
