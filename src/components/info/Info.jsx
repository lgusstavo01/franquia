import styles from "./Info.module.css";

export function Info() {
  return (
    <div className={styles.back}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>
            <h2>
              VOCÊ NO{" "}
              <span>
                CONTROLE DO SEU NEGÓCIO COM ALTO RETORNO E BAIXO INVESTIMENTO
              </span>
            </h2>
          </div>
          <div className={styles.infos}>
            <ul>
              <li>Retorno do invesimento em 6 meses</li>
              <li>Margem de lucro de 15%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
