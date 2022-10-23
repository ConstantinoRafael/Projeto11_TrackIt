import GlobalStyle from "./assets/css/GlobalStyle";
import HabitsPage from "./Pages/HabitsPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import TodayPage from "./Pages/TodayPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import UserProvider from "./context/User";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
