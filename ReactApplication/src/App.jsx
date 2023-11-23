import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Drivers } from "./pages/Drivers";
import { Teams } from "./pages/Teams";
import { Home } from "./pages/Home";
import { Races } from "./pages/Races";
import { DriverForm } from "./pages/DriverForm";
import { TeamForm } from "./pages/TeamForm";
import { RaceForm } from "./pages/RaceForm";
import { DriversQuizPage } from "./pages/DriversQuiz";
import { TeamsQuizPage } from "./pages/TeamsQuiz";

export default function App() {
  async function getDrivers() {
    const response = await fetch("/api/Driver");
    const data = await response.json();
    return data;
  }

  const [drivers, setDrivers] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState([]);

  useEffect(() => {
    getDrivers().then((data) => setDrivers(data));
  }, []);

  const handleDriverSelect = (driverId) => {
    setSelectedDrivers((prevSelected) => [
      ...prevSelected.filter((item) => item !== driverId),
      driverId,
    ]);
  };

  const handleTeamSubmit = () => {};

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            index
            path="/drivers"
            element={
              <Drivers drivers={drivers} onSelectDriver={handleDriverSelect} />
            }
          />
          <Route
            path="/teams"
            element={
              <Teams drivers={drivers} selectedDrivers={selectedDrivers} />
            }
          />
          <Route path="/races" element={<Races />} />
          <Route path="/new-driver" element={<DriverForm />} />
          <Route path="/new-race" element={<RaceForm />} />
          <Route path="/drivers-quiz" element={<DriversQuizPage />} />
          <Route path="/teams-quiz" element={<TeamsQuizPage />} />
          <Route
            path="/new-team"
            element={
              <TeamForm
                selectedDrivers={selectedDrivers}
                onSubmit={handleTeamSubmit}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
