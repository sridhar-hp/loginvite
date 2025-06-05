// import React, { useState } from 'react';
// import './Apps.css';
// import login from './login.png'; // Assuming you have a logo image in the same directory

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState("MY JAMAL MY PRIDE");
//   return (
//     <>
//       {/* <h4> | HOME | ABOUT | CONTACT | </h4> */}
//       <div className="apps">



//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <div className="baground">
//           <img src={login} alt="jmc logo" />
//           <p id="output" >{message}</p>
//           <div className="usearnamee">
//             <input id="user"
//               type="text"
//               placeholder="usearname"
//               value={username}
//               onChange={e => setUsername(e.target.value)} />


//           </div>
//           <br />
//           <div className="password">
//             <input id="pass"
//               type="password"
//               placeholder="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)} />


//           </div>
//           <div className="login">
//             {/* <button onClick={() => {
//             alert("LOGIN SUCCESS ✅ ")
//             setMessage("Welcome!");    }}> LOGIN </button> */}

//             <button onClick={async () => {
//               try {
//                 const res = await fetch('http://localhost:5000/api/login', {
//                   method: 'POST',
//                   headers: {
//                     'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify({ username, password })
//                 });

//                 const data = await res.json();
//                 alert(data.message);
//                 setMessage(data.success ? "Welcome!" : "Login Failed!");
// //                 if (user) {
// //   res.send({ success: true, message: 'Login successful ✅' });
// // } else {
// //   res.status(401).send({ success: false, message: 'Login failed ❌' });
// // }
//               } catch (err) {
//                 console.error("Error logging in:", err);
//                 alert("Something went wrong!");
//                  setMessage("Server error");
//               }
//             }}>
//               LOGIN
//             </button>

//           </div>
//         </div>


//       </div>
//     </>);
// }
// export default App;
// // Note: The above code is a simple React component that renders a login page with a logo, username, password fields, and a login button.

// ✅ App.js (Frontend)
import React, { useState, useEffect } from 'react';
import './Apps.css';
import login from './login.png';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('MY JAMAL MY PRIDE');
  const [users, setUsers] = useState([]);

  // ✅ Fetch users from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      alert(data.message);
      setMessage(data.success ? 'Welcome!' : 'Login Failed!');
    } catch (err) {
      alert('Something went wrong!');
      setMessage('Server error');
    }
  };

  return (
    <div className="apps">
      <div className="baground">
        <img src={login} alt="jmc logo" />
        <p id="output">{message}</p>

        <div className="usearnamee">
          <input
            id="user"
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="password">
          <input
            id="pass"
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="login">
          <button onClick={handleLogin}>LOGIN</button>
        </div>

        <h3>All Users in Database:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              Username: {user.username} | Password: {user.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
