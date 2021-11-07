import { useState } from "react";
import axios from "axios";
import Details from "./components/Details";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";

const App = () => {
  const [errMessage, setErrMessage] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    specialAttack: "",
    defense: "",
    specialDefense: "",
    speed: "",
    type: "",
    species: "",
    weight: "",
    moves: "",
  });

  const search = (char) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${char}`)
      .then((response) => {
        setDetails({
          name: response.data.name,
          image: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          specialAttack: response.data.stats[3].base_stat,
          specialDefense: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          weight: response.data.weight,
          moves: response.data.moves.length,
        });
        setIsErr(false);
      })
      .catch((err) => {
        setErrMessage(err.response.data);
        setIsErr(true);
      });
  };

  return (
    <div>
      <SearchBar onSubmit={search} />
      {isErr ? (
        <h3>No Character Found</h3>
      ) : details.name.length !== 0 ? (
        <Details message={errMessage} characterDetails={details} />
      ) : null}
    </div>
  );
};

export default App;
