import styles from "./ChartGame.module.css";
import BuySell from "../../components/BuySell";
import Status from "../../components/Status";
import Chart from "../../components/Chart";

const ChartGame = () => {
  const handleFinish = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <Chart />
      </div>
      <div className={styles.buysell}>
        <BuySell />
      </div>
      <div className={styles.status}>
        <Status />
      </div>
      <button className={styles.hint}>힌트</button>
      <button className={styles.settings}>설정</button>
      <button className={styles.end} onClick={handleFinish}>
        게임 종료
      </button>
    </div>
  );
};

export default ChartGame;
