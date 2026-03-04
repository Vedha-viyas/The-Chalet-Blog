import type { FC } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.button_wrapper}>
        <button className={styles.reservation_button}>Reservation</button>
      </div>

      <div className={styles.brand_logo}>
        <span>B</span>
      </div>

      <div className={styles.menu_wrapper}>
        <button className={styles.menu_button}>MENU</button>
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20V18.1025H30V20H0ZM0 10.9488V9.05123H30V10.9488H0ZM0 1.89753V0H30V1.89753H0Z"
            fill="#FBF3E7"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
