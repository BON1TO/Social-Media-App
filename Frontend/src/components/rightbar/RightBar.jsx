import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Mac Freud</b> and <b>3 others friends</b> have a brithday today</span>
        </div>
        <div className="ADoutline">
          <span className="adLabel">Sponsored</span>
          <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
          <div className="rightbarTitle">YOUR CHANCE TO WIN THIS BIKE</div>
        </div>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (<Online key={u.id} user={u} />))}

        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City</span>
            <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Hometown</span>
              <span className="rightbarInfoValue">Berlin</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Qualification</span>
              <span className="rightbarInfoValue">Graduate</span>
            </div>
          </div>
        
        <h2 className="rightbarTitle"><h2>Mutual Friends -</h2></h2><br></br>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"><h4>Hayley Atwell</h4></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"><h4>Hayley Atwell</h4></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"><h4>Hayley Atwell</h4></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"><h4>Hayley Atwell</h4></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"><h4>Hayley Atwell</h4></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"><h4>Hayley Atwell</h4></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"><h4>Hayley Atwell</h4></span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName"><h4>Hayley Atwell</h4></span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
