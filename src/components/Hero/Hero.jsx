import styles from "./Hero.module.css";

import logo from "../../assets/logo.png";

export function Hero() {
  return (
    <div className={styles.bgHero}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.infos}>
            <img src={logo} alt="Aqui vem a logo" />
            <h2>A história de sucesso que você vai contar será escrita aqui</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              eaque soluta non vero assumenda cumque ipsa amet accusantium?
              Incidunt voluptatum rem provident ullam veritatis! Dolores dolorum
              facere architecto excepturi velit!
            </p>
          </div>
          <div className={styles.form}>
            <form action="">
              <input type="text" name="nome" placeholder="Digite o seu nome" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite o seu email"
              />
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Telefone com DDD"
              />
              <select name="atuacao" id="atuacao">
                <option value="padrao" disabled selected>
                  Qual sua situação hoje?
                </option>
                <option value="desempregado">Desempregado</option>
                <option value="clt">CLT</option>
                <option value="empreendedor">Empreendedor</option>
              </select>
              <select name="iniciar" id="iniciar">
                <option value="padrao" disabled selected>
                  Quando você pretende iniciar a sua franquia ?
                </option>
                <option value="imediatamente">Imediatamente</option>
                <option value="1mes">Dentro de 1 mês</option>
                <option value="2meses">Dentro de 2 mêses</option>
                <option value="naosei">Ainda não sei</option>
              </select>
              <select name="investir" id="investir">
                <option value="padrao" disabled selected>
                  Quanto está disposto a investir ?
                </option>
                <option value="10mil">R$10.000</option>
                <option value="20mil">R$20.000</option>
                <option value="30mil">R$30.000</option>
              </select>
              <button>Quero ser um franqueado</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
