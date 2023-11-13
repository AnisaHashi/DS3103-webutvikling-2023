import "./TeamCard.css";

export function TeamCard(props) {
  return (
    <article style={{ width: "550px" }}>
      <div className="card m-2 " style={{ width: "500px" }}>
        <div className="card-body">
          <h5 className="card-title">DriverOne: {props.team.driverOne}</h5>
          <hr />
          <h5 className="card-title">DriverTwo: {props.team.driverTwo}</h5>
          <hr />
          <p className="card-text">Id: {props.team.id}</p>
          <hr />
          <p className="card-text">Manufacturer: {props.team.manufacturer}</p>
        </div>
        <img
          height={1}
          src="https://placehold.co/100"
          class="card-img-top"
          alt="Responsive image"
        ></img>
      </div>
    </article>
  );
}
