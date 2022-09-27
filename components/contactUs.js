import styles from "./contactUs.module.scss";
import core from "./core.module.scss";

function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <div className={core.container}>
        <div className={core.title}>Зв’яжіться з нами</div>
        <div className={styles.contactUs__mapContainer}>
          <iframe
            className={styles.contactUs__map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.30256847891735!2d25.61124061718163!3d49.55189729465217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473031537cc54845%3A0x6c92066ab3ef8619!2z0J_QnyDQl9C10LzQu9C10LLQu9Cw0YHQvdC40Lot0KHQmw!5e0!3m2!1suk!2sua!4v1663697779204!5m2!1suk!2sua"
            title="Землевласник-СЛ"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.contactUs__items}>
          <div className={styles.contactUs__item}>
            <div className={styles.contactUs__itemTitle}>Контакти</div>
            <div className={styles.contactUs__itemText}>
              <div>098 544 7647</div>
              <div>0352 520 207</div>
            </div>
          </div>
          <div className={styles.contactUs__item}>
            <div className={styles.contactUs__itemTitle}>Графік</div>
            <div className={styles.contactUs__itemText}>
              <div>пн: 09:00–14:00</div>
              <div>вт: 09:00–14:00</div>
              <div>ср: 09:00–14:00</div>
              <div>чт: 09:00–14:00</div>
              <div>пт: 09:00–14:00</div>
            </div>
          </div>
          <div className={styles.contactUs__item}>
            <div className={styles.contactUs__itemTitle}>Адреса</div>
            <div className={styles.contactUs__itemText}>
              Проспект Степана Бандери, 34А 2, Тернопіль, Тернопільська область,
              Україна, 46000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
