import styles from "./Depoimentos.module.css";

export function Depoimentos() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Quem confia na Xmonkey?</h2>
        </div>
        <div className={styles.videos}>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/opNgLruHJio?si=s1Ld3M89HIA_Ka-h"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/opNgLruHJio?si=s1Ld3M89HIA_Ka-h"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/opNgLruHJio?si=s1Ld3M89HIA_Ka-h"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
