import React, { useState } from "react";
import "./Autocomplete.css";

const Autocomplete = ({ suggestions }) => {
  const [suggestionsList, setSuggestionsList] = useState([]);
  const handleOnChange = (ev) => {
    let word = ev.target.value;
    const filteredData = !word
      ? []
      : suggestions.filter((item) => item.includes(word));
    setSuggestionsList(filteredData);
  };

  return (
    <div className="autocomplete">
      <input
        className="autocomplete__input"
        type="text"
        onChange={handleOnChange}
      />
      {suggestionsList.length > 0 && (
        <ul className="autocomplete__list">
          {suggestionsList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
