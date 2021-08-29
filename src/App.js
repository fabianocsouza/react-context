import React from 'react'
import { AuthContext }from './provider/auth'

function App() {
  const { user } = React.useContext(AuthContext)
  console.log(user)
  return (
    <div className="App">
      <h1>{user.name}</h1>
    </div>
  );
}

export default App;
