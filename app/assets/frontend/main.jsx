import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

let mockTweets = [
  { id: 1, name: 'Tulio Oliveira', body: "My #FirstTweet" },
  { id: 2, name: 'Tulio Oliveira', body: "My #FirstTweet" },
  { id: 3, name: 'Tulio Oliveira', body: "My #FirstTweet" }
];

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetsList tweets={mockTweets} />
      </div>
    );
  }
}

let documentReady = () => {
  React.render(
      <Main />,
      document.getElementById('react')
    );
};
$(documentReady);
