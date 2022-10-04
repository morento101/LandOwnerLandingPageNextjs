import { motion } from "framer-motion";
import Backdrop from "/components/backdrop/backdrop";
import styles from "./modal.module.scss";
import Image from "next/image";

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.modal}
        id="modal"
      >
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/images/wave-haikei.svg"
          className={styles.modal__img}
        />
        <div className={styles.modal__close} onClick={handleClose}></div>
        <p>{text}</p>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
