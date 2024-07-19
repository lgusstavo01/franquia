import styles from "./Socios.module.css";

export function Socios() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>Veja o que os sócios tem a dizer sobre a <span>Xmonkey!</span></div>
        </div>
        <div className={styles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/H3wtItkfwQ4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
