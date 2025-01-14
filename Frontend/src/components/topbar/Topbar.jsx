import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LinkSphere</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search" type="text" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <Link to="/" className="topbarLink">Home</Link> {/* Link to Home page */}
        <Link to="/profile" className="topbarLink">Profile</Link> {/* Link to Profile page */}
        
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
      </div>

      <Link to="/profile">
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" /> {/* Link to Profile page */}
      </Link>
    </div>
  );
}
