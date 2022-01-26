import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media screen and ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(183px, 1fr));

  @media screen and ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(auto-fill, 188px);
  }
`;

const SportsSection = styled.section`
  overflow-y: scroll;
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(183px, 1fr));

  @media screen and ${QUERIES.tabletAndUp} {
    display: flex;
    flex-wrap: nowrap;

    & > a {
      flex: 1 1 0;
      min-width: 220px;
    }
  }
  @media screen and ${QUERIES.tabletAndUp} {
  }
`;

export default SpecialtyStoryGrid;
