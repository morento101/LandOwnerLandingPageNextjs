import styles from "./services.module.scss";
import core from "/styles/core.module.scss";
import Image from "next/image";
import { useState } from "react";
import Button from "/elements/button";
import Modal from "../modal/modal";
import { AnimatePresence } from "framer-motion";
import { close, open } from "/lib/modal";

const Services = () => {
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
                src="/images/Topographic Survey Image.png"
                blurDataURL="/images/Topographic Survey Image.jpg"
                placeholder="blur"
                alt="Топографічне знімання"
                className={loaded ? core.unblur : ""}
                onLoadingComplete={() => setLoaded(true)}
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
              <Image
                width={450}
                height={450}
                src="/images/Limits Image.png"
                blurDataURL="/images/Limits Image.jpg"
                placeholder="blur"
                alt="Визначення меж"
                className={loaded ? core.unblur : ""}
                onLoadingComplete={() => setLoaded(true)}
              />
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
                src="/images/Assembly Image.png"
                blurDataURL="/images/Assembly Image.jpg"
                placeholder="blur"
                alt="Грошова оцінка"
                className={loaded ? core.unblur : ""}
                onLoadingComplete={() => setLoaded(true)}
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
          <Button
            text="Дізнатись більше"
            className={styles.services__button}
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
      <hr className={core.brownHr} />
    </div>
  );
};

export default Services;
