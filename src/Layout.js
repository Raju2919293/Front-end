import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Auth/Navbar';
import { Outlet } from "react-router-dom";
function Layout(props) {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;