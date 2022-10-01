import styles from "./aboutUs.module.scss";
import core from "/styles/core.module.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={core.container}>
      <div className={styles.aboutUs}>
        <div className={`${styles.aboutUs__title} ${core.title}`}>Про нас</div>
        <div className={styles.aboutUs__text}>
          &quot;ПП Землевласник-СЛ&quot; виконує всі види землевпорядних та геодезичних
          робіт. Пропонуємо розв&apos;язання задач землевпорядкування, геодезії та
          будівництва. Використовуємо новітні цифрові тахеометри, супутникові та
          геодезичні системи, комп&apos;ютерне програмне забезпечення для
          високоточного визначення геодезичних координат та побудови карт та
          планів земельних ділянок.
        </div>
        <div className={styles.aboutUs__items}>
          <div className={styles.aboutUs__item}>
            <Image
              width={187}
              height={130}
              className={`${styles.aboutUs__icon} ${core.globe}`}
              src="/images/icon1.svg"
              alt=""
            />
            <div className={styles.aboutUs__iconText}>17 років досвіду</div>
          </div>
          <div className={styles.aboutUs__item}>
            <Image
              width={130}
              height={130}
              className={`${styles.aboutUs__icon} ${core.smile}`}
              src="/images/icon2.svg"
              alt=""
            />
            <div className={styles.aboutUs__iconText}>
              1000+ задоволених клієнтів
            </div>
          </div>
        </div>
        <hr className={core.brownHr} />
      </div>
    </div>
  );
};

export default AboutUs;
