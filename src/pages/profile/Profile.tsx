import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Info from "./Info.jsx";
import Settings from "./Settings.jsx";

const Profile = () => {
    return (
        <div>
            <h1>Profile page</h1>
            <header>
                <ul>
                    <li>
                        <Link to="info">Profile Info</Link>
                    </li>
                    <li>
                        <Link to="settings">Profile Settings</Link>
                    </li>
                </ul>
            </header>
            <Routes>
                <Route path="info" element={<Info />}/>
                <Route path="settings" element={<Settings />}/>
            </Routes>
        </div>
    );
};
export default Profile;