import styles from "./banner.module.css";
import Image from "next/image";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_img}>
        <Image src="/img/banner.jpg" alt="banner" fill objectFit="cover" />
      </div>
      <div className={styles.banner_overlay}>
        <h2 className={styles.banner_title_h2}>สุขภาพของคุณสำคัญที่สุด</h2>
        <h2 className={styles.banner_title_h2}>
          ร่วมปกป้องตนเองและคนที่คุณรัก
        </h2>

        <h1 className={styles.banner_title_h1}>
          รับวัคซีน COVID-19 ใกล้บ้านคุณ
        </h1>
        <div>
          <button type="button" className={styles.banner_button}>
            จองคิวที่นี่!
          </button>
        </div>
      </div>
    </div>
  );
}
