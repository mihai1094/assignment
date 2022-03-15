import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

type ContinentsComponent = () => {};

const Continents: ContinentsComponent = () => {
  const CONTINENTS = gql`
    query Continents {
      continents {
        name
      }
    }
  `;

  interface ContinentsQery {
    continents: Array<{
      name: string;
    }>;
  }

  const { loading, error, data } = useQuery<ContinentsQery>(CONTINENTS);

  const ContinentsTitle = styled.h3`
    font-weight: bold;
  `;

  return (
    <div>
      <ContinentsTitle>Continents:</ContinentsTitle>
      {data?.continents.map(({ name }) => (
        <div>{name}</div>
      ))}
    </div>
  );
};

export default Continents;
