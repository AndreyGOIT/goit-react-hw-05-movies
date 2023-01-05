import FetchTrending from 'components/FetchTrending/FetchTrending';
import styles from '../pages/Home.module.css';
import image from '../images/kartinkin-com-p-kinematograf-art-art-krasivo-15.png';

export default function Home() {
  return (
    <>
      <main className={styles.mainHomePage}>
        <div className={styles.imgWrap}>
          <img src={image} alt="Cinema" width="400" height="350" />
        </div>
        <div className={styles.trendingListWrap}>
          <h1 className={styles.title}>TOP 20 TRENDING FILMS TODAY</h1>
          <FetchTrending />
        </div>
      </main>
    </>
  );
}
