import Image from "next/image";
import { useState } from "react";
import styles from "./projectItem.module.css";

export default function ProjectItem(props) {
  const [hover, setHover] = useState(false);

  return (
    <div className={styles["project-item"]}>
      <div
        className={styles.image}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <Image
          layout="fill"
          src={props.item.src}
          alt={props.item.description}
          objectPosition="50% 50%"
        ></Image>
        <div
          className={styles["hover-msg"]}
          style={{ display: hover ? "flex" : "none" }}
        >
          coming soon...💖
        </div>
      </div>

      <span className={styles["tags"]}>{props.item.tags}</span>
      <span className={styles["title"]}>{props.item.title}</span>
      <span className={styles["description"]}>{props.item.description}</span>
    </div>
  );
}
