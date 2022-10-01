import Image from "next/image";
import styles from "./navbar.module.scss";
import core from "/styles/core.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={`${styles.navbar__container} ${core.container}`}>
        <div className={styles.navbar__group}>
          <div className={styles.navbar__textGroup}>
            <a
              className={`${styles.navbar__logoText} ${core.link}`}
              href="#top"
            >
              ПП Землевласник-СЛ
            </a>
          </div>
        </div>
        <div className={`${styles.navbar__group} ${styles.hide}`}>
          <Image
            src="/images/Calendar.svg"
            height={31}
            width={31}
            alt="Розклад роботи"
          />
          <div className={styles.navbar__textGroup}>
            <div className={styles.navbar__text}>Пн-Пт з 9:00 до 14:00</div>
            <div className={styles.navbar__text}>Сб-Нд - вихідні</div>
          </div>
        </div>
        <div className={styles.navbar__group}>
          <Image
            src="/images/Phone.svg"
            height={31}
            width={31}
            alt="Котактні номери"
          />
          <div className={styles.navbar__textGroup}>
            <div className={styles.navbar__text}>+38 (098) 544 76 47</div>
            <div className={styles.navbar__text}>0352 520 207</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
