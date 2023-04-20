import React from 'react';

const Profile = ({ photo }) => {
  return (
    <div>
      <img src={photo} alt="Profile" style={{ maxWidth: '300px', height: 'auto', marginTop: '50px' }} />
    </div>
  );
};

export default Profile;
