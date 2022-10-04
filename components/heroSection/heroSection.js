import styles from "./heroSection.module.scss";
import core from "/styles/core.module.scss";
import Image from "next/image";
import { useState } from "react";
import Button from "/elements/button";
import Modal from "../modal/modal";
import { AnimatePresence } from "framer-motion";
import { open, close } from "/lib/modal";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.hero__img}>
        <Image
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/images/Hero Image.png"
          blurDataURL="/images/Hero Image Blur.jpg"
          placeholder="blur"
          alt="Hero"
          className={loaded ? core.unblur : ""}
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>
      <div className={core.container}>
        <div className={`${styles.hero__content}`}>
          <div className={styles.hero__brand}>ПП ЗЕМЛЕВЛАСНИК-СЛ</div>
          <div className={styles.hero__works}>
            Землевпорядні та Геодезичні роботи
          </div>
          <div className={styles.hero__description}>
            Високоточне визначення меж земельних ділянок, побудова карт та
            планів
          </div>
          <Button
            text="Зв'яжіться з нами"
            modalOpen={modalOpen}
            close={() => close(setModalOpen)}
            open={() => open(setModalOpen)}
          />
        </div>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={() => close(setModalOpen)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
