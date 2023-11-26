import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel";

export function Home() {
  return (
    <div className="container">
      <Carousel />
      <div>
        <div class="row mx-auto mt-5">
          <div class="col-md-6">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Explore the Formula 1 teams!</h5>
                <p class="card-text">
                  Speed Master F1 is not just a battle among drivers but also a
                  competition between the leading racing teams. Two of the most
                  iconic teams are Red Bull Racing and Ferrari. Are you ready to
                  test your skills and learn more about the top Speed Master F1
                  teams? Start the quiz and enjoy the journey through the
                  excitement of the F1 teams' universe!
                </p>
                <Link
                  to="/teams-quiz"
                  className="btn btn-outline-danger bg-gradient"
                >
                  Play Teams Quiz
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Welcome to Drivers F1 Quiz!</h5>
                <p class="card-text">
                  Explore your knowledge about today's Formula 1 stars. Test
                  yourself with questions about drivers like Max Verstappen,
                  Sergio Perez, Lewis Hamilton, Carlos Sainz, and Fernando
                  Alonso. Hurry and start the quiz now for an experience filled
                  with fun and excitement!
                </p>
                <Link
                  to="/drivers-quiz"
                  class="btn btn-outline-danger bg-gradient"
                >
                  Play Drivers Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
