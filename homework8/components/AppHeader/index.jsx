import { useState } from "react";
import OverlayMenu from "../OverlayMenu";
import HamburgerButton from "./HamburgerButton";
import styles from "./index.module.css";

export default function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles["header-container"]}>
      <div className={styles["my-name"]}>TAEYOUNG YUN</div>
      <div className="d-row align-center">
        <button className={styles["work-button"]}>Work</button>
        <button
          onClick={() => {
            window.open("/resume.pdf", "_blank");
          }}
          className={styles["resume-button"]}
        >
          Resume
        </button>

        <HamburgerButton
          open={showMenu}
          toggleMenu={() => {
            setShowMenu(!showMenu);
          }}
        ></HamburgerButton>
      </div>

      <OverlayMenu show={showMenu}></OverlayMenu>
    </div>
  );
}
