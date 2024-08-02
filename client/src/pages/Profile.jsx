// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const Profile = () => {
//   const { user, logout } = useAuth();

//   return (
//     <div>
//       <h1>Profile</h1>
//       {user ? (
//         <div>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <p>Please log in to view your profile.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;

import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Profile.css'; // Import your CSS file for styling

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {user ? (
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="logout-button" onClick={logout}>Logout</button>
        </div>
      ) : (
        <p className="login-prompt">Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
