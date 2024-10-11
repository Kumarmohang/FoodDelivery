import React, { useState } from 'react';
import Login from './components/Login';
import Registration from './components/Registration';

const App: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="container">
        <br />
        <button
          className={`btn ${isRegistering ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setIsRegistering(false)}>
          Login
        </button>

        <button
          className={`btn ${isRegistering ? 'btn-secondary' : 'btn-primary'}`}
          onClick={() => setIsRegistering(true)}>
          Register
        </button>
      </div>

      {isRegistering ? <Registration /> : <Login />}
    </div>
  );
};

export default App;
