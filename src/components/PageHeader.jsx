
import BackButton from './BackButton';
import styled from 'styled-components';

const PageHeader = ({ title }) => {
  return (
    <PageHeaderWrapper>
      <h1 style={{ fontFamily: 'coolvetica', fontSize: '4rem' }}>
          {title}
        </h1>
        <BackButton />
    </PageHeaderWrapper>
  );
};

// --- Styled Components ---

const PageHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default PageHeader;
