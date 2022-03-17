import React, { useState } from "react";
import SearchComponent from "../components/SearchComponent";
import { useQuery, gql } from "@apollo/client";
import CountryComponent from "../components/CountryComponent";

interface ICountry {
  capital: string;
  code: string;
  continent: { __typename: string; name: string };
  currency: string;
  emoji: string;
  emojiU: string;
  name: string;
  __typename: string;
}

export const CountriesCatalogPage = () => {
  const [countries, setCountries] = useState([]);

  const COUNTRIES_CONTINENTS = gql`
    query Continents {
      countries {
        name
        capital
        emoji
        code
        emojiU
        currency
        continent {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(COUNTRIES_CONTINENTS);

  const countrySearchHandler = (countryName: string) => {
    return data?.countries.filter((country: any) => {
      return country.name.toUpperCase().includes(countryName.toUpperCase());
    });
  };

  const handleCountrySearch = (searchTxt: string) => {
    const countryList = countrySearchHandler(searchTxt);
    setCountries(countryList);
  };

  return (
    <>
      <div>
        <SearchComponent searchHandler={handleCountrySearch} />
        <hr />
        {countries.length ? (
          countries.map((country: ICountry) => {
            return (
              <CountryComponent
                key={country.emojiU}
                emoji={country.emoji}
                continent={country.continent.name}
                countryName={country.name}
                code={country.code}
                currency={country.currency}
              />
            );
          })
        ) : (
          <div style={{ marginLeft: 100, marginTop: 50 }}>
            No countries to display.
          </div>
        )}
      </div>
    </>
  );
};
