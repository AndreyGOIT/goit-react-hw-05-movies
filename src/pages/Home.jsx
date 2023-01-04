import FetchTrending from 'components/FetchTrending/FetchTrending';
import styles from '../pages/Home.module.css';

export default function Home() {
  return (
    <>
      <main>
        <h1 className={styles.title}>TRENDING TODAY</h1>
        <FetchTrending />
      </main>
    </>
  );
}
