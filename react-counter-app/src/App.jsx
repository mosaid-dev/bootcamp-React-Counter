import UserProfile from './userProfile';

function App() {
  const users = [
    { id: 1, name: 'Bona S', job:'Lead Developer', avatar: 'https://i.pravatar.cc/150?image=1'},
    { id: 2, name: 'Alice Smith', job :'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?image=2'},
    { id: 3, name: 'Charlie Brown', job:'Project Manager', avatar: 'https://i.pravatar.cc/150?image=3'}
  ];  

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User Profiles</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {users.map(user => (
          <UserProfile
            key={user.id}
            name={user.name}
            job={user.job}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
