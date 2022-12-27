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
    followerCount: this.props.userdata.followers,
  };

  clickHandler = () => {
    if (this.state.isCardActive) {
      this.setState({
        isCardActive: false,
        followerCount: this.state.followerCount - 1,
      });
      return;
    }
    this.setState({
      isCardActive: true,
      followerCount: this.state.followerCount + 1,
    });
    return;
  };

  localStorageSetter = object => {
    localStorage.setItem('picks', JSON.stringify(object));
  };

  componentDidMount() {
    try {
      let storageData = JSON.parse(localStorage.getItem('picks'));
      if (storageData) {
        if (storageData.some(entry => entry.id === this.props.userdata.id)) {
          const newEntry = storageData.find(
            entry => entry.id === this.props.userdata.id
          );
          this.setState({
            isCardActive: newEntry.isCardActive,
            followerCount: newEntry.followerCount,
          });
          return;
        }
        return;
      }
      storageData = [];
      this.localStorageSetter(storageData);
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      try {
        let storageData = JSON.parse(localStorage.getItem('picks'));
        if (storageData) {
          if (storageData.some(entry => entry.id === this.props.userdata.id)) {
            const newEntry = { id: this.props.userdata.id, ...this.state };
            const index = storageData.findIndex(
              entry => entry.id === this.props.userdata.id
            );
            storageData.splice(index, 1, newEntry);
            this.localStorageSetter(storageData);
            return;
          }
          const newEntry = { id: this.props.userdata.id, ...this.state };
          storageData.push(newEntry);
          this.localStorageSetter(storageData);
          return;
        }
        storageData = [];
        this.localStorageSetter(storageData);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  render() {
    const { user, tweets, avatar } = this.props.userdata;
    const { followerCount } = this.state;

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
            <Photo src={avatar} alt={user} />
          </PhotoBox>
        </MiddleBox>
        <LowerBox>
          <TweetCount twCount={tweets} />
          <FollowerCount
            follCount={Number(followerCount).toLocaleString('en-EN')}
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
