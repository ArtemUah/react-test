import { Profile } from "./Profile";
import users from "../data/user"
import stats from '../data/data'
import { Statistics } from "./Statistics";
import friends from '../data/friends'
import { FriendsList } from "./Friends";
import { Transactions } from "./Transactions";
import transactions from '../data/transactions'

export const App = () => {
  return (
    <div>
      <Profile user={users} />
      <Statistics stats={stats} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
