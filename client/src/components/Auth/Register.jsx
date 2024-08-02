// import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const { register } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await register(name, email, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Register</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         required
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <input
//         type="tole"
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//         placeholder="Role"
        
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Register.css'; // Import your CSS file for styling

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(name, email, password, role);
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="register-input"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="register-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="register-input"
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role (e.g., admin, user)"
          className="register-input"
        />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
