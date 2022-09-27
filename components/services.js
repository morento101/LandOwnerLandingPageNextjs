import styles from "./services.module.scss";
import core from "./core.module.scss";
import Image from "next/image";

const Services = () => {
  return (
    <div className={core.container}>
      <div className={styles.services}>
        <div className={`${styles.services__title} ${core.title}`}>Послуги</div>
        <div className={styles.services__contentBody}>
          <div className={styles.services__content}>
            <div className={styles.services__content__text}>
              <div className={styles.services__content__title}>
                Топографічне знімання місцевості в масштабі 1:500-1:2000
              </div>
              <div className={styles.services__content__description}>
                Топографічна знімання – створення топографічного або
                геодезичного плану місцевості. Проведення інженерно-геодезичних
                робіт передбачає знімання меж ділянки та об’єктів нерухомості,
                які розташовані на досліджуваній земельній території.
              </div>
            </div>
            <div className={styles.services__content__img}>
              <Image
                width={450}
                height={450}
                src="/images/Topographic Survey Image.svg"
                alt="Топографічне знімання"
              />
            </div>
          </div>
          <div className={`${styles.services__content} ${styles.leftImg}`}>
            <div className={styles.services__content__text}>
              <div className={styles.services__content__title}>
                Винесення меж земельних ділянок на місцевість
              </div>
              <div className={styles.services__content__description}>
                Винесення меж земельної ділянки в натурі на місцевості фактично
                позначає граничні межі ділянки, відокремлюючи її від сусідніх
                наділів.
              </div>
            </div>
            <div className={styles.services__content__img}>
              <Image width={450} height={450} src="/images/Limits Image.svg" alt="Визначення меж"/>
            </div>
          </div>
          <div className={styles.services__content}>
            <div className={styles.services__content__text}>
              <div className={styles.services__content__title}>
                Нормативна оцінка земельних ділянок
              </div>
              <div className={styles.services__content__description}>
                Нормативна грошова оцінка земельних ділянок - капіталізований
                рентний дохід із земельної ділянки, визначений за встановленими
                і затвердженими нормативами
              </div>
            </div>
            <div className={styles.services__content__img}>
              <Image
                width={450}
                height={450}
                src="/images/Assembly Image.svg"
                alt="Грошова оцінка"
              />
            </div>
          </div>
        </div>
        <div className={styles.services__additional}>
          <div className={styles.services__moreInfo}>
            Також виконуємо: консультаційні послуги, виготовлення землевпорядної
            документації, виготовлення кадастрових номерів, кадастрове знімання
            земельних ділянок і багато чого іншого
          </div>
          <button className={`${styles.services__button} ${core.button}`}>
            Дізнатись більше
          </button>
        </div>
      </div>
      <hr className={core.brownHr} />
    </div>
  );
};

export default Services;
