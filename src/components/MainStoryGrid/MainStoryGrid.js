import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryListOpinion>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryListOpinion>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media screen and ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    gap: 32px;
    grid-template-columns: 2.1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media screen and ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    gap: 0;
    grid-template-columns: 3.7fr 2.9fr 2.2fr;
    grid-template-rows: 1fr 152px;
    /* background-color: ${COLORS.gray[300]}; */
  }
`;

const MainStorySection = styled.section`
  background-color: ${COLORS.gray[100]};
  border-right: 1px solid ${COLORS.gray[300]};
  padding-right: 16px;
  margin-right: 16px;
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  background-color: ${COLORS.gray[100]};
  /* border-right: 1px solid ${COLORS.gray[300]}; */

  padding-right: 16px;

  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.gray[100]};
  padding-bottom: 16px;
  & > :not(:last-of-type) {
    padding-bottom: 16px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    margin-bottom: 16px;
  }
`;

const StoryListOpinion = styled(StoryList)`
  @media screen and ${QUERIES.tabletOnly} {
    gap: 32px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and ${QUERIES.tabletOnly} {
    & > :not(:last-of-type) {
      border-bottom: none;
    }
  }
`;

const OpinionSection = styled.section`
  background-color: ${COLORS.gray[100]};
  grid-area: opinion-stories;
  border-left: 1px solid ${COLORS.gray[300]};
  padding-left: 16px;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  background-color: ${COLORS.gray[100]};
  border-top: 1px solid ${COLORS.gray[300]};
  margin-top: 16px;
  padding-top: 16px;
`;

export default MainStoryGrid;
