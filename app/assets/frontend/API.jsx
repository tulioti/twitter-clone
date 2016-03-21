import ServerActions from "./actions/ServerActions"

export default {
  getAllTweets() {
    $.ajax("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  }
}
