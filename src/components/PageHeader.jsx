
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rightArrow from '../assets/images/right-arrow.png';

const BackButton = () => {
  return (
    <Link to={'/'}>
      <Img src={rightArrow} alt="back button" />
    </Link>
  );
};

const Img = styled.img`
  transition: var(--transition-speed);
  transform: scaleX(-1);

  &:hover {
    transform: scaleX(-1) scale(1.2);
  }
`;

const PageHeader = ({ title }) => {
  return (
    <PageHeaderWrapper>
      <h1>{title}</h1>
      <BackButton />
    </PageHeaderWrapper>
  );
};

const PageHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px;

  h1 {
    font-family: 'coolvetica';
    font-size: 4rem;
    margin: 0;
  }
`;

export default PageHeader;
