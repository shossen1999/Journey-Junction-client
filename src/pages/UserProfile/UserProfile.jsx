import React from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <div className="max-w-lg border border-gray-300 my-5 md:my-1 lg:my-1 w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">User Profile</h1>
                <div className="flex justify-center mb-6">
                    <img  className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
                        src={user.photoURL}   alt="Profile Picture"
                       
                      
                    />
                </div>
                <div className="text-center mb-6">
                    <p className="text-lg font-semibold mb-1 text-gray-800">User Name:</p>
                    <p className="text-xl text-blue-700">{user.displayName}</p>
                </div>
                <div className="text-center mb-6">
                    <p className="text-lg font-semibold mb-1 text-gray-800">User Email:</p>
                    <p className="text-xl text-blue-700">{user.email}</p>
                </div>
                <div className="text-center">
                    <NavLink to='/updateProfile'>
                        <button className="btn btn-primary w-full">Update Profile</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;