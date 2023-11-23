import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <div>
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Utforsk Formel 1-lagene!</h5>
                <p class="card-text">
                  Formel 1 er ikke bare en kamp mellom førere, men også en
                  konkurranse mellom de ledende racingteamene. To av de mest
                  ikoniske lagene er Red Bull Racing og Ferrari. Er du klar for
                  å teste dine ferdigheter og lære mer om de ledende Formel
                  1-lagene? Start quizen og nyt reisen gjennom spenningen i
                  F1-teamenes univers!
                </p>
                <a href="/quiz" class="btn btn-outline-success">
                  Spill Quiz
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Velkommen til Drivers F1 Quiz!</h5>
                <p class="card-text">
                  Utforsk din kunnskap om dagens Formel 1-stjerner. Test deg
                  selv med spørsmål om førere som Max Verstappen, Sergio Perez,
                  Lewis Hamilton, Carlos Sainz, og Fernando Alonso. Skynd deg og
                  start quizen nå for en opplevelse fylt med moro og spenning!
                </p>
                <a href="/quiz" class="btn btn-outline-primary">
                  Spill Drivers Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
