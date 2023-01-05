import FetchTrending from 'components/FetchTrending/FetchTrending';
import styles from '../Home/Home.module.css';
import image from '../../images/kartinkin-com-p-kinematograf-art-art-krasivo-15.png';
export default function Home() {
  return (
    <>
      <main className={styles.mainHomePage}>
        <h1 className={styles.title}>TOP 20 TRENDING FILMS TODAY</h1>
        <div className={styles.mainPageWrapper}>
          <div className={styles.imgWrap}>
            <img src={image} alt="Cinema" width="300" height="300" />
          </div>
          <div className={styles.trendingListWrap}>
            <FetchTrending />
          </div>
        </div>
      </main>
    </>
  );
}
