import Chart from "../../admin/chart/Chart";
import FeaturedInfo from "../../admin/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../admin/widgetSm/WidgetSm";
import WidgetSmP from "../../admin/widgetSm/widgetsmProducts";
import WidgetLg from "../../admin/widgetLg/WidgetLg";
import { useState } from "react";
import { useEffect } from "react";

export default function Home({isAuth}) {

  
  return (
    <div className="home">
      {isAuth ?
      <>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetSmP/>
        
       
      </div>
      </>
      : <p>Not authorized</p>}
    </div>
  );
}
