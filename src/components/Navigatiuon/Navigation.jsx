import { Link } from './Navigation.styled';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
        <hr />
      </nav>
    </>
  );
}
