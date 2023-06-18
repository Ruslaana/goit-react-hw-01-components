import Profile from './Profile/Profile.jsx';
import Statistics from './Data/Data.jsx';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
