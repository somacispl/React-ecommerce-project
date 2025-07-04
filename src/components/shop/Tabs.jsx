import { useState } from "react"
import { TabsData } from "./TabsData"

const Tabs = () => {
 // State to track the active tab
 const [activeTab, setActiveTab] = useState(0);

 // Event handler to set the active tab when a tab is clicked
 const handleClick = (id) => {
  setActiveTab(id);
 }

 return (
  <>
   <div className="tabs-container my-5 pb-3">
    <div className="tabLinks">
     <div className="container">
      <ul>
       {TabsData.map((tab, i) => (
        <li key={i} className={activeTab === i ? "active" : ""}
         onClick={()=>handleClick(i)}
        ><span>{tab.title}</span></li>
       ))}
      </ul>
     </div>
    </div>
    <div className="container mt-5">
     <div className="content">
      {TabsData.map((data, i) => (
       <div dangerouslySetInnerHTML={{ __html: data.desc }} className={`desc ${activeTab === i ? "active" : ""}`} key={i}>
        {/* {data.desc} */}
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 )
}

export default Tabs