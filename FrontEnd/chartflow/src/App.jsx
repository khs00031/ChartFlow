import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./styles/themeProvider";
import TurnContext from "./context/TurnContext";
import CoinContext from "./context/CoinContext";
import { useState } from "react";
import MainPage from "./pages/MainPage";
import ChartGame from "./pages/ChartGame";
import Board from "./pages/Board";
import Quiz from "./pages/Quiz";
import History from "./pages/History";
import MyPage from "./pages/MyPage";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";

function App() {
  const [thisTurn, setThisTurn] = useState(() => {
    const storedThisTurn = localStorage.getItem("thisTurn");
    return storedThisTurn !== null ? parseInt(storedThisTurn, 10) : 1;
  });

  const [coinNum, setCoinNum] = useState(() => {
    const storedCoinNum = localStorage.getItem("coinNum");
    return storedCoinNum !== null ? parseInt(storedCoinNum, 10) : 3;
  });

  return (
    <Router>
      <ThemeProvider>
        <CoinContext.Provider value={{ coinNum, setCoinNum }}>
          <TurnContext.Provider value={{ thisTurn, setThisTurn }}>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/game" element={<ChartGame />} />
              <Route path="/board/*" element={<Board />} />
              <Route path="/quiz/*" element={<Quiz />} />
              <Route path="/hist/*" element={<History />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/join" element={<Join />} />
              <Route path="/join" element={<Join />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </TurnContext.Provider>
        </CoinContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
