import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import FriendListItem from "./FriendListItem/FriendListItem";
import friendsJson from "./FriendList/Friends.json";
import Transaction from "./TransactionHistory/transaction.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "./Profile/user.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        likes={user.stats.likes}
        followers={user.stats.followers}
      />
      <FriendList friends={friendsJson} />
      <TransactionHistory items={Transaction} />
    </div>
  );
}

export default App;
