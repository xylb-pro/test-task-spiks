import styled from 'styled-components';
import { IRepoModel } from '../../models/repo';
import { COLOR } from '../../styles/colors';
import { ForkImg } from './ForkImg';
import { StarImg } from './StarImg';

interface IRepoElement {
  repo: IRepoModel;
}

export const RepoElement: React.FC<IRepoElement> = ({
  repo: {
    description,
    forkCount,
    nameWithOwner,
    primaryLanguage,
    owner,
    stargazerCount,
    url,
  },
}) => {
  return (
    <Container>
      <Title>
        <a href={url}>{nameWithOwner}</a>
      </Title>
      <Description>
        {description?.slice(0, 300) + (description ? '...' : '')}
      </Description>
      <Info>
        <InfoElement>{primaryLanguage?.name}</InfoElement>
        <InfoElement>
          <StarImg marginRight={5} />
          {stargazerCount}
        </InfoElement>
        <InfoElement>
          <ForkImg marginRight={5} />
          {forkCount}
        </InfoElement>
        <InfoElement>
          Build by
          <a href={owner.url}>
            <AuthorImg src={owner.avatarUrl} />
          </a>
        </InfoElement>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 700px;
  height: 150px;
  max-width: 100%;

  padding: 20px;
  margin-top: 4px;

  border-radius: 4px;
  border: 1px solid ${COLOR.backgroundHeader};
`;

const Title = styled.div`
  width: 100%;

  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: ${COLOR.repoTitleBlue};
`;

const Description = styled.div`
  width: 100%;

  font-size: 14px;
  text-align: left;
  color: ${COLOR.repoDescriptionGray};
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  color: ${COLOR.repoDescriptionGray};
`;

const InfoElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  margin-right: 10px;
`;

const AuthorImg = styled.img`
  width: 20px;
  height: 20px;

  margin-left: 8px;

  border-radius: 100%;
`;
