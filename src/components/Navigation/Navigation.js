import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
