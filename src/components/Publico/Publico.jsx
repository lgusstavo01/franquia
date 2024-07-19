import { ShoppingBag, TrendUp, User } from "@phosphor-icons/react";
import styles from "./Publico.module.css";

export function Publico() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <h2>Para quem é a <br/><span>XMONKEY...</span></h2>
        </div>
        <div className={styles.card}>
          <ul>
            <li>
              <User size={32} />
              <div>
                <h4>Para você ...</h4>
                <p>
                  Que já trabalha com marketing digital e quer profissionalizar
                  e expandir sua operação.
                </p>
              </div>
            </li>
            <li>
              <ShoppingBag size={32} />
              <div>
                <h4>Para você ...</h4>
                <p>
                  Que quer começar um negócio no mercado de marketing digital,
                  mas não sabe por onde começar.
                </p>
              </div>
            </li>
            <li>
              <TrendUp size={32} />
              <div>
                <h4>Para você ...</h4>
                <p>
                  Que quer investir em um dos mercados que mais cresce com uma
                  das maiores marcas do segmento.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
