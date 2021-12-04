import styles from "./index.module.css";

export default function OverlayMenu(props) {
  return (
    <div
      className={styles["overlay-container"]}
      style={{
        visibility: props.show ? "visible" : "collapse",
      }}
    >
      <button className={styles["work-button"]}>Work</button>
      <button className={styles["resume-button"]}>Resume</button>
    </div>
  );
}
