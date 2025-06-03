import React, { useState } from 'react';
import './Apps.css';
import login from './login.png'; // Assuming you have a logo image in the same directory

function App() {
  const [username, setUsername] = useState('');
  const [password, setPasword] = useState('');
  const [message, setMessage] = useState("MY JAMAL MY PRIDE");
  return (
<>
    {/* <h4> | HOME | ABOUT | CONTACT | </h4> */}
    <div className="apps">

  

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="baground">
        <img src={login} alt="jmc logo" />
        <p id="output" >{message}</p>
        <div className="usearnamee">
          <input id="user"
            type="text"
            placeholder="usearname"
            value={username}
            onChange={e => setUsername(e.target.value)} />


        </div>
        <br />
        <div className="pasword">
          <input id="pass"
            type="text"
            placeholder="pasword"
            value={password}
            onChange={e => setPasword(e.target.value)} />


        </div>
        <div className="login">
          <button onClick={() => {
            alert("LOGIN SUCCESS ✅ ")
            setMessage("Welcome!");    }}> LOGIN </button>
        </div>
      </div>


    </div>
 </> );
}
export default App;
// Note: The above code is a simple React component that renders a login page with a logo, username, password fields, and a login button.