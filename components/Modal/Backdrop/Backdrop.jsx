import { motion } from "framer-motion";
import styles from "./Backdrop.module.scss"

export const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.backdrop}
    >
      {children}
    </motion.div>
  );
}
