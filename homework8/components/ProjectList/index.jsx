import styles from "./index.module.css";
import ProjectItem from "./ProjectItem";

export default function ProjectList(props) {
  return (
    <div className={styles["project-list"]}>
      <div className={styles["two-column-list-container"]}>
        <div className={styles["column-list"]}>
          {props.items
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <ProjectItem item={item} key={item.title}></ProjectItem>
            ))}
        </div>
        <div className={styles["column-list"]}>
          {props.items
            .filter((_, index) => index % 2 === 1)
            .map((item) => (
              <ProjectItem item={item} key={item.title}></ProjectItem>
            ))}
        </div>
      </div>
      <div className={styles["one-column-list-container"]}>
        {props.items.map((item) => (
          <ProjectItem item={item} key={item.title}></ProjectItem>
        ))}
      </div>
    </div>
  );
}
