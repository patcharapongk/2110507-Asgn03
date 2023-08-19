import Image from "next/image";
import styles from "./infocard.module.css";

export default function InfoCard() {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.card_pic_wrap}>
          <Image
            className={styles.card_pic_wrap_img}
            src="/img/vaccine.jpg"
            alt="Coronavirus Vaccine"
            fill
            objectFit="cover"
          />
        </div>
        <div className={styles.card_content}>
          <h3>mRNA Vaccine </h3>
          <p>
            วัคซีน COVID-19 ช่วยเสริมสร้างภูมิคุ้มกันให้ร่างกาย
            เพื่อป้องกันการติดเชื้อและลดความรุนแรงของโรค
            วัคซีนผ่านการทดสอบทางวิทยาศาสตร์อย่างเข้มงวด
            และผ่านการรับรองจากองค์กรสากล
            เราขอเชิญคุณมาร่วมสร้างสังคมที่ปลอดภัยและสุขภาพดีขึ้น
            รับวัคซีนตอนนี้!
          </p>
          <p>
            <a href="#0">อ่านต่อ </a>
          </p>
        </div>
      </div>
    </div>
  );
}
