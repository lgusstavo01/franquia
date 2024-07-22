import styles from "./Clients.module.css";
import fotoCliente from "../../assets/fotoClientet.png";

export function Clients() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>
          Nós saímos do absoluto zero para a marca de <br />
          <span>+300 clientes atendidos</span>
        </h2>
      </div>
      <div className={styles.fotos}>
        <img src={fotoCliente} alt="" />
        <img src={fotoCliente} alt="" />
        <img src={fotoCliente} alt="" />
        <img src={fotoCliente} alt="" />
        <img src={fotoCliente} alt="" />
        <img src={fotoCliente} alt="" />
        <img src={fotoCliente} alt="" />
      </div>
      <div className={styles.cta}>
        <h4>
          E queremos ter <span>VOCÊ</span> no nosso time para juntos
          consquistarmos resultados como estes.
        </h4>
      </div>
      <div className={styles.button}>
        <button>
          <p>QUERO CONQUISTAR MEUS PRÓPRIOS CLIENTES</p>
        </button>
      </div>
    </div>
  );
}
