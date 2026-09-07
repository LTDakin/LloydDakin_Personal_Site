
import styled from 'styled-components';

import TitleLink from '../components/TitleLink';

function navbar() {
  return (
    <StyledNav>
      <TitleLink path={'/projects'} buttonText={'Projects'} />
      <TitleLink path={'/resume'} buttonText={'Resume'} />
      <TitleLink path={'/contact'} buttonText={'Contact'} />
    </StyledNav>
  );
}

const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default navbar;
