import React, { useEffect, useState} from 'react'

import TabContent from '../Tab/TabContent';
import TabNavItem from '../Tab/TabNavItem';
import './Tab.css'

const MainTab = ({description, rules}) => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="tabs">
      <ul className="nav">
        <TabNavItem title="Description" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="House Rules" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <div>

          <p>{description}</p>

          </div>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <ul>
            {rules.split(',').map((rule, i) => (
              <React.Fragment key={i}>

                  <li>{rule}</li>
              </React.Fragment>
            ))}
          </ul>
        </TabContent>
        
      </div>
    </div>
  );
};
 
export default MainTab;


































// const Tab = ({children, active = 0}) => {
//     const [activeTab, setActiveTab] = useState(active);
//     const [tabsData, setTabsData] = useState([]);

//     useEffect(() =>{
        
//         let data =[];
//         React.Children.forEach(children, element =>{
//             if (!React.isValidElement(element)) return;

//             const {props: {tab, children}} = element;
//             data.push({tab, children});
//         }, [children])

//         setTabsData(data);


//     }, [children])

           

//   return (
//     <div className='tab'>
//         <ul className='tab_ul'>

//             {
//                 tabsData.map(({tab}, idx) =>{
//                     <li className='tab_list'>
//                         <a className={`nav-link ${idx === activeTab ? "active" : ""}`} href ="#"
//                         onClick={()=> setActiveTab(idx)}>
//                             {tab}
//                         </a>
//                     </li>
//                 })
//             }
//         </ul>

//         <div className='tab-content'>
//             {tabsData[activeTab] && tabsData[activeTab].children }
//         </div>
        

//     </div>
//   )
// }

// const TabPane = ({children}) => {
//     return {children}
// }

// Tab.TabPane = TabPane;
// export default Tab