//import { useContext } from 'react'
import { useAuth }from './provider/auth';
import { Profile } from './components/Profile';
import { Login } from './components/Login';

function App() {
  const { user } = useAuth();
  console.log(user)
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <Login />
      <Profile />
    </div>
  );
}

export default App;
