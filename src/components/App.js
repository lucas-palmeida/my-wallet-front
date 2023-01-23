import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import NewEntryPage from "../pages/NewEntryPage";
import NewOutputPage from "../pages/NewOutputPage";
import UserContext from "../context/UserContext";
import { useState } from "react";

export default function App() {
  const [ user, setUser ] = useState({ name: "", token: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/nova-entrada" element={<NewEntryPage />} />
            <Route path="/nova-saida" element={<NewOutputPage />} />
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
