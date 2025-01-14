import "./home.css"; 

import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/Sidebar";

import React from "react";

export default function Home() {
  return (
    <div className="homeContainer">
      <RightBar />
      <Feed />
      <SideBar />
    </div>
  );
}
