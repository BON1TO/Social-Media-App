import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
            <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Nadine Kumler</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile />
        </div>
      </div>
    </div>
  );
}
