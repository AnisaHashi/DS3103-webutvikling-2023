import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
// import { F1Teams } from "./components/F1Teams";
import { Drivers } from "./pages/Drivers";
import { Teams } from "./pages/Teams";
import { Home } from "./pages/Home";
import { Races } from "./pages/Races";
import { DriverForm } from "./pages/DriverForm";
import { TeamForm } from "./pages/TeamForm";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <F1Teams /> */}
      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/drivers" element={<Drivers />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/races" element={<Races />}></Route>
          <Route path="/new-driver" element={<DriverForm />}></Route>
          <Route path="/new-team" element={<TeamForm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
