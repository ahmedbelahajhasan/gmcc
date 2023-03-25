import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    const getUsers=async()=>{
    try{
      const res=await userRequest.get("users/?new=true")
      setUsers(res.data)
    }catch(err){
      console.log('err')
    };
    };
    getUsers();
  },[])
  return (
    
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user=>(
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img||" https://us.123rf.com/450wm/archivector/archivector2104/archivector210400011/169173886-signe-graphique-d-avatar-d-homme-signe-de-profil-masculin-anonyme-dans-le-cercle-isol%C3%A9-sur-fond-blan.jpg?ver=6"}
            alt=""
            className="widgetSmImg"
          />

          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}






