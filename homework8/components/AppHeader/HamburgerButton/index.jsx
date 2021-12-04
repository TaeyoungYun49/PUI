import { useState } from "react";
import styles from "./index.module.css";

export default function HamburgerButton(props) {
  return (
    <div
      className={`${styles["hamburger-icon"]} ${
        props.open ? styles["open"] : ""
      }`}
      onClick={() => {
        props.toggleMenu();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
