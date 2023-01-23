import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import NewEntryPage from "../pages/NewEntryPage";
import NewOutputPage from "../pages/NewOutputPage";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-entrada" element={<NewEntryPage />} />
          <Route path="/nova-saida" element={<NewOutputPage />} />
        </Routes>
    </BrowserRouter>
  );
}
