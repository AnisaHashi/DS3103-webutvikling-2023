export function DriverCard(props) {
  return (
    <div className="card m-2 " style={{ width: "18rem" }}>
      <img
        height={1}
        src="https://placehold.co/100"
        class="img-fluid"
        alt="Responsive image"
      ></img>
      <div className="card-body">
        <h5 className="card-title">Name: {props.driver.name}</h5>
        <hr />
        <p className="card-text">Age: {props.driver.age}</p>
        <hr />
        <p className="card-text">Nationality: {props.driver.nationality}</p>
      </div>
    </div>
  );
}
