import React, { useState } from "react";
import "./countryComponent.css";

interface ICountryProps {
  countryName: string;
  continent: string;
  emoji: string;
  code: string;
  currency: string;
}

function CountryComponent({
  countryName,
  continent,
  emoji,
  code,
  currency,
}: ICountryProps) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="container">
      <div>
        <span>{emoji}</span>
        {countryName}
      </div>
      <div>Continent: {continent}</div>
      {showDetails && (
        <div className="details">
          <div>Country code: {code}</div>
          <div>Currency: {currency}</div>
        </div>
      )}
      <button
        className="btn"
        onClick={() => setShowDetails((showDetails) => !showDetails)}
      >
        See details...
      </button>
    </div>
  );
}

export default CountryComponent;
