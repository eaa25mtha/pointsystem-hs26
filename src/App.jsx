import HomePage from "./pages/HomePage";
import PointPage from "./pages/PointPage";
import NavBar from "./components/NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/point" element={<PointPage />} />
      </Routes>
    </HashRouter>
  );
}
