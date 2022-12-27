import { Component } from 'react';
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

export class Card extends Component {
  state = {
    isCardActive: false,
    tweetCount: 777,
    followerCount: 100500,
  };

  clickHandler = () => {
    if (this.state.isCardActive) {
      this.setState({
        isCardActive: false,
        tweetCount: this.state.tweetCount - 1,
        followerCount: this.state.followerCount - 1,
      });
      return;
    }
    this.setState({
      isCardActive: true,
      tweetCount: this.state.tweetCount + 1,
      followerCount: this.state.followerCount + 1,
    });
    return;
  };

  componentDidMount() {
    try {
      const storageData = JSON.parse(localStorage.getItem('state'));
      this.setState(storageData);
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem('state', JSON.stringify(this.state));
    }
  }

  render() {
    return (
      <Article>
        <TitleBox>
          <Subtitle text="SubHeading" />
          <Logo
            src={require('../../images/logo.svg').default}
            alt="GoIt Logo"
          />
        </TitleBox>
        <UpperBox>
          <Poster
            src={require('../../images/poster.svg').default}
            alt="Poster"
          />
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
          <TweetCount twCount={this.state.tweetCount} />
          <FollowerCount
            follCount={this.state.followerCount.toLocaleString('en-EN')}
          />
          <CardBtn
            type="button"
            text="Follow"
            isActive={this.state.isCardActive}
            onClick={this.clickHandler}
          />
        </LowerBox>
      </Article>
    );
  }
}
