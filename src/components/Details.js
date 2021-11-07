const Details = (props) => {
  const characterDetails = props.characterDetails;
  return (
    <div className="details">
      <img id="details__img" src={characterDetails.image} alt="character" />
      <div className="details__title">{characterDetails.name}</div>
      <table>
        <tr>
          <td>
            <h5>Type</h5>
          </td>
          <td>
            <h5>: {characterDetails.type}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Hp</h5>
          </td>
          <td>
            <h5>: {characterDetails.hp}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Attack</h5>
          </td>
          <td>
            <h5>: {characterDetails.attack}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Super Attack</h5>
          </td>
          <td>
            <h5>: {characterDetails.specialAttack} </h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Defense</h5>
          </td>
          <td>
            <h5>: {characterDetails.defense}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Special Defense</h5>
          </td>
          <td>
            <h5>: {characterDetails.specialDefense}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Speed</h5>
          </td>
          <td>
            <h5>: {characterDetails.speed}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Moves</h5>
          </td>
          <td>
            <h5>: {characterDetails.moves}</h5>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Details;
