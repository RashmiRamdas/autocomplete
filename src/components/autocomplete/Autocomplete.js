import React, { useState } from "react";
import "./Autocomplete.css";

const Autocomplete = ({ suggestions }) => {
  const [filteredSuggestionsList, setFilteredSuggestionsList] = useState([]);
  const [currentActiveItemIndex, setCurrentActiveItemIndex] = useState(-1);
  const [inputVal, setInputVal] = useState("");

  const handleOnChange = (ev) => {
    let word = ev.target.value;
    setInputVal(word);
    const filteredData = !word
      ? []
      : suggestions.filter(
          (item) => item.toLowerCase().indexOf(word.toLowerCase()) > -1
        );
    setFilteredSuggestionsList(filteredData);
  };

  const disableSuggestion = () => {
    setFilteredSuggestionsList([]);
    setCurrentActiveItemIndex(-1);
  };

  const handleKeyDown = (ev) => {
    let activeIndex = currentActiveItemIndex;
    let totalFilteredSuggestions = filteredSuggestionsList.length - 1;
    console.log(ev);
    if (ev.key === "Escape" || ev.code === "Escape") {
      disableSuggestion();
    }
    if (ev.key === "Enter" || ev.code === "Enter") {
      setInputVal(filteredSuggestionsList[currentActiveItemIndex]);
      disableSuggestion();
    }
    if (ev.key === "ArrowDown" || ev.code === "ArrowDown") {
      if (currentActiveItemIndex === totalFilteredSuggestions) {
        setCurrentActiveItemIndex(0);
      } else {
        setCurrentActiveItemIndex(activeIndex + 1);
      }
    }
    if (ev.key === "ArrowUp" || ev.code === "ArrowUp") {
      if (currentActiveItemIndex === 0) {
        setCurrentActiveItemIndex(totalFilteredSuggestions);
      } else {
        setCurrentActiveItemIndex(activeIndex - 1);
      }
    }
  };

  const handleItemSelection = (index) => {
    setInputVal(filteredSuggestionsList[index]);
    disableSuggestion();
  };

  const clearInput = () => {
    setInputVal("");
    disableSuggestion();
  };

  return (
    <div className="autocomplete">
      <input
        className="autocomplete__input"
        type="text"
        value={inputVal}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        // onBlur={disableSuggestion}
      />
      {inputVal.length ? (
        <span onClick={clearInput} className="autocomplete__close">
          &#10006;
        </span>
      ) : null}
      {filteredSuggestionsList.length > 0 && (
        <ul className="autocomplete__list">
          {filteredSuggestionsList.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleItemSelection(index)}
                className={currentActiveItemIndex === index ? "active" : ""}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

//onblur of inp
