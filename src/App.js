import GlobalStyle from "./assets/css/GlobalStyle";
import HabitsPage from "./Pages/HabitsPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import TodayPage from "./Pages/TodayPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserProvider from "./context/User";
import ProgressProvider from "./context/Progress";
import HistoryPage from "./Pages/HistoryPage";

function App() {
  return (
    <UserProvider>
      <ProgressProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </UserProvider>
  );
}

export default App;
