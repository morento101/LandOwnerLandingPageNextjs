import styles from "./heroSection.module.scss";
import core from "./core.module.scss";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div>
        <Image
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/images/Hero Image.png"
          blurDataURL="/images/Hero Image.jpg"
          placeholder="blur"
          alt=""
          className={styles.hero__img}
        />
      </div>
      <div className={`${styles.content} ${core.container}`}>
        <div className={styles.hero__brand}>ПП ЗЕМЛЕВЛАСНИК-СЛ</div>
        <div className={styles.hero__works}>
          Землевпорядні та Геодезичні роботи
        </div>
        <div className={styles.hero__description}>
          Високоточне визначення меж земельних ділянок, побудова карт та планів
        </div>
        <button className={core.button}>Зв&apos;яжіться з нами</button>
      </div>
    </div>
  );
};

export default HeroSection;
