import React, { useState } from "react";
import "./searchComponent.css";

// The reason I used separate CSS file is because I am not too familiar with Styled Components.

function SearchComponent({ searchHandler }: any) {
  const [countryText, setCountryText] = useState("");

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setCountryText(evt.target.value);

  const onSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (countryText === "") {
      alert("Please enter country name!");
    } else {
      searchHandler(countryText);
      setCountryText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="formContainer">
        <div className="search-container">
          <h3>Keyword</h3>
          <input
            aria-label="country-input"
            className="input"
            type="text"
            name="countryName"
            placeholder="Search Country"
            value={countryText}
            onChange={onChange}
          />
        </div>
        <div className="search-btn-container">
          <button className="search-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchComponent;
