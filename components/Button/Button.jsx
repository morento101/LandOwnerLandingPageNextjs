import { motion } from "framer-motion";
import styles from "./Button.module.scss";

export const Button = ({ text, modalOpen, close, open, className = "" }) => {
  return (
    <div>
      <motion.button
        className={`${styles.button} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        {text}
      </motion.button>
    </div>
  );
}
