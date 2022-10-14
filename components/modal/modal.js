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

const Modal = ({ handleClose }) => {
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
        <div className={styles.modal__content}>
          <div className={styles.modal__itemGroup}>
            <div className={styles.modal__item}>
              <Image width={31} height={31} src="/images/Phone.svg" />
              <div>
                <div className={styles.modal__text}>+38 (098) 544 7647</div>
                <div className={styles.modal__text}>0352 520 207</div>
              </div>
            </div>
            <div className={styles.modal__item}>
              <Image width={31} height={31} src="/images/Mail Icon.svg" />

              <div className={styles.modal__text}>
                zemlevlasnuk-sl@gmail.com
              </div>
            </div>
            <div className={styles.modal__item}>
              <Image width={31} height={31} src="/images/Clock Icon.svg" />

              <div className={styles.modal__text}>Пн-Пт: 09:00-14:00</div>
            </div>
          </div>
          <div className={styles.modal__itemGroup}>
            <div className={styles.modal__item}>
              <Image width={31} height={31} src="/images/Target Icon.svg" />

              <div className={`${styles.modal__text} ${styles.white}`}>
                Проспект Степана Бандери, 34А 2, Тернопіль, Тернопільська
                область, Україна, 46000
              </div>
            </div>
            <div className={styles.modal__item}>
              <Image width={31} height={31} src="/images/Message Icon.svg" />
              <div className={`${styles.modal__text} ${styles.white}`}>
                Фейсбук сторінка
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
