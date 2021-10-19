import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth()
    return (
        <div>
            {
                user.email && <div className="flex items-center justify-center flex-col">
                    <h3 className="my-4 text-blue-600">Welcome {user.name}</h3>
                    <div>
                        <img className="text-center" src={user.photo} alt="profileImage" />

                    </div>

                    <p className="my-4"><strong>Your Email: </strong>{user.email}</p>
                </div>
            }
        </div>
    );
};

export default Profile;