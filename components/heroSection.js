import styles from "./heroSection.module.scss";
import core from "./core.module.scss";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

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
          <button className={core.button}>Зв&apos;яжіться з нами</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
