import FriendsList from './components/FriendsList/FriendsList';
import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import Transactions from './components/Transactions/Transactions';
import friends from './data/friends';
import transactions from './data/transactions';
import user from './data/user';
import data from './data/data';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
