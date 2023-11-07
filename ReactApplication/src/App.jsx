import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Drivers } from "./pages/Drivers";
import { Teams } from "./pages/Teams";
import { Home } from "./pages/Home";
import { Races } from "./pages/Races";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route index path="/drivers" element={<Drivers />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/races" element={<Races />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
