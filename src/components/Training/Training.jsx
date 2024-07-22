import styles from "./Training.module.css";

import chat from '../../assets/chat.svg'
import treinamento from '../../assets/dispatcher.svg'

export function Training() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Receba um treinamento completo!</h2>
          <p>
            Além de ter acesso a todos os nossos processos, ferramentas e
            rotinas, realizaremos seu treinamento teórico e prático, para que
            você tenha todo conhecimento necessário para operar e gerenciar a
            sua franquia.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={treinamento} alt="" />
            <h4>Treinamento Assistido</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              iste blanditiis ea ratione optio modi praesentium repudiandae,
              sunt maxime quod itaque architecto cum, animi laboriosam
              repellendus perferendis, debitis quam minus!
            </p>
          </div>
          <div className={styles.card}>
            <img src={chat} alt="" />
            <h4>Treinamento Assistido</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              iste blanditiis ea ratione optio modi praesentium repudiandae,
              sunt maxime quod itaque architecto cum, animi laboriosam
              repellendus perferendis, debitis quam minus!
            </p>
          </div>
          <div className={styles.card}>
            <img src={treinamento} alt="" />
            <h4>Treinamento Assistido</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              iste blanditiis ea ratione optio modi praesentium repudiandae,
              sunt maxime quod itaque architecto cum, animi laboriosam
              repellendus perferendis, debitis quam minus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
