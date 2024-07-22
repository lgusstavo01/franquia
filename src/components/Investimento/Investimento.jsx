import styles from "./Investimento.module.css";

export function Investimento() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>
            Tempo de <span>retorno de investimento</span>
          </h2>
        </div>
        <div className={styles.card}>
          <h2>6 à 9 meses</h2>
          <p>
            Após a conclusão do treinamento você já começa a atuar com seus
            primeiros clientes e estima-se que a partir de 8 meses você já possa
            obter retorno sobre o investimento realizado.
          </p>
          <span>
            *valor estimado com base no histórico dos franqueados atuais
          </span>
        </div>
      </div>
    </div>
  );
}
