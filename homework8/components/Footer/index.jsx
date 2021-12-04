import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Let&apos;s Chat!</span>
      <div className={styles["links-container"]}>
        <div className={styles["links-inner-container"]}>
          <div className={styles["link-left-col"]}>
            <span className={styles.link} style={{ marginBottom: "29px" }}>
              ✉️ Email
            </span>
            <span className={styles.link}>💼 LinkedIn</span>
          </div>
          <div className="d-col">
            <span className={styles.link} style={{ marginBottom: "29px" }}>
              🔮 Dribbble
            </span>
            <span className={styles.link}>🎨 Instagram</span>
          </div>
        </div>
        <div>
          <span className={styles.email}>taeyoung.design@gmail.com</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles["bottom-text"]} style={{ marginRight: "4px" }}>
          © 2021 all rights reserved,
        </div>
        <div className={styles["bottom-text"]} style={{ marginBottom: "8px" }}>
          designed & coded with 💜 ️ by Taeyoung Yun
        </div>
      </div>
    </div>
  );
}
