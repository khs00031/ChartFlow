import styles from "./ChartGame.module.css";
import BuySell from "../../components/BuySell";
import Status from "../../components/Status";
import Chart from "../../components/Chart";
import Quit from "../../components/Quit";
import Start from "../../components/Start";
import End from "../../components/End";
import TurnContext from "../../context/TurnContext";
import { useState, useEffect, useContext } from "react";

const ChartGame = () => {
  const { thisTurn, setThisTurn } = useContext(TurnContext);
  const [modalQuitShow, setModalQuitShow] = useState(false);
  const [modalStartShow, setModalStartShow] = useState(thisTurn !== 1);

  const [modalEndShow, setModalEndShow] = useState(false);

  const handleModalQuit = () => {
    modalQuitShow ? setModalQuitShow(false) : setModalQuitShow(true);
  };

  const handleQuitClose = () => {
    setModalQuitShow(false);
  };

  const handleStartClose = () => {
    setModalStartShow(false);
  };

  useEffect(() => {
    // time.current = time.current + 1;
    // console.log(time.current);
    // console.log(data[time.current].Close);
    if (thisTurn > 5) {
      setThisTurn(5);
      setModalEndShow(true);
    }
  }, [thisTurn]);

  return (
    <>
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
        <button className={styles.end} onClick={handleModalQuit}>
          게임 종료
        </button>
      </div>
      {modalQuitShow && <Quit handleClose={handleQuitClose} />}
      {modalStartShow && (
        <Start
          handleClose={handleStartClose}
          setModalStartShow={setModalStartShow}
        />
      )}
      {modalEndShow && <End />}
    </>
  );
};

export default ChartGame;
