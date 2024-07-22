import styles from "./Why.module.css";

import xmonkey from "../../assets/pqXmonkey.svg";

export function Why() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>Porque escolher a Xmonkey?</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          accusantium quam fuga atque quae sit magni ipsam pariatur. Illum,
          fugit saepe! Facere, harum quae! Animi amet libero commodi quam
          molestiae!
        </p>  
      </div>
      <div className={styles.img}>
        <img src={xmonkey} alt="" />
      </div>
    </div>
  );
}
