import { motion } from "framer-motion";
import core from "/styles/core.module.scss";

function Button({ text, modalOpen, close, open, className = "" }) {
  return (
    <div>
      <motion.button
        className={`${core.button} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        {text}
      </motion.button>
    </div>
  );
}

export default Button;
