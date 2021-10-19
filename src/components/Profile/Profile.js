import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth()
    return (
        <div>
            {
                user.email && <div>
                    <h3>Welcome {user.name}</h3>
                    <img className="text-center" src={user.photo} alt="profileImage" />
                    <p>Email: {user.email}</p>
                </div>
            }
        </div>
    );
};

export default Profile;