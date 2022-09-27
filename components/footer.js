import styles from "./footer.module.scss";
import core from "./core.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <div className={`${styles.footer} ${core.container}`}>
      <a className={`${styles.footer__companyName} ${core.link}`} href="#top">
        ПП Землевласник-СЛ
      </a>
      <a href="https://www.facebook.com/zemlevlasnyk/">
        <div className={styles.footer__facebook}>
          <Image width={75} height={75} src="/images/Facebook Logo.svg" alt="Facebook"/>
        </div>
      </a>
    </div>
  );
}

export default Footer;
