import { Article } from './Card.styled';
import { TitleBox } from './TitleBox/TitleBox';
import { Subtitle } from './Subtitle/Subtitle';
import { Logo } from './Logo/Logo';
import { UpperBox } from './UpperBox/UpperBox';
import { Poster } from './Poster/Poster';
import { MiddleBox } from './MiddleBox/MiddleBox';
import { PhotoBox } from './MiddleBox/PhotoBox/PhotoBox';
import { Photo } from './MiddleBox/PhotoBox/Photo/Photo';
import { LowerBox } from './LowerBox/LowerBox';
import { TweetCount } from './Tweets/Tweets';
import { FollowerCount } from './Followers/Followers';
import { CardBtn } from './Button/CardBtn';

export const Card = () => (
  <Article>
    <TitleBox>
      <Subtitle text="SubHeading" />
      <Logo src={require('../../images/logo.svg').default} alt="GoIt Logo" />
    </TitleBox>
    <UpperBox>
      <Poster src={require('../../images/poster.svg').default} alt="Poster" />
    </UpperBox>
    <MiddleBox>
      <PhotoBox>
        <Photo
          src={require('../../images/hansel.png').default}
          alt="UserPhoto"
        />
      </PhotoBox>
    </MiddleBox>
    <LowerBox>
      <TweetCount twCount="777" />
      <FollowerCount follCount="100,500" />
      <CardBtn type="button" text="Follow" />
    </LowerBox>
  </Article>
);
