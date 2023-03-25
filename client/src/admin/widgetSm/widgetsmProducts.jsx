import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSmP() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const getProducts=async()=>{
    try{
      const res=await userRequest.get("products/?new=true")
      setProducts(res.data)
    }catch(err){
      console.log('err')
    };
    };
    getProducts();
  },[])
  return (
    
    <div className="widgetSm">
      <span className="widgetSmTitle">New Products</span>
      <ul className="widgetSmList">
        {products.map(product=>(
        <li className="widgetSmListItem" key={product._id}>
          <img
            src={product.img||" https://us.123rf.com/450wm/archivector/archivector2104/archivector210400011/169173886-signe-graphique-d-avatar-d-homme-signe-de-profil-masculin-anonyme-dans-le-cercle-isol%C3%A9-sur-fond-blan.jpg?ver=6"}
            alt=""
            className="widgetSmImg"
          />

          <div className="widgetSmProduct">
            <span className="widgetSmProductName">{product.title}</span>
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
