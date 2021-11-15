import { useState } from "react";

const SearchBar = (props) => {
  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  const handleSubmit = (e) => {
    props.onSubmit(character);
    setCharacter("");
    e.preventDefault();
  };

  return (
    <div>
      <div className="search">
        <div className="search__title">Search Pokemon Characters</div>
        <form>
          <input
            id="search__input"
            value={character}
            onChange={handleChange}
            type="text"
            placeholder="character name"
          />
          <button id="search__btn" onClick={handleSubmit} disabled={!character}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
