import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <HeaderItem>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </HeaderItem>
        <Logo />
        <HeaderItemEnd>
          <SubscriberAction>
            <Button>Subscribe</Button>
            <Link href="#">Already a subscriber?</Link>
          </SubscriberAction>
        </HeaderItemEnd>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media screen and ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  gap: 32px;
  padding-left: 8px;

  & button {
    display: none;
    @media screen and ${QUERIES.desktopAndUp} {
      display: initial;
    }
  }
`;

const HeaderItemEnd = styled(HeaderItem)`
  justify-content: flex-end;
  align-self: inherit;
`;

const SubscriberAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  display: none;

  @media screen and ${QUERIES.desktopAndUp} {
    display: initial;

    font-family: var(--font-family-serif);
    color: var(--color-gray-900);
    font-weight: var(--font-weight-normal);
    font-size: calc(14 / 16 * 1rem);
    text-decoration: underline;
    font-style: italic;
  }
`;

export default Header;
