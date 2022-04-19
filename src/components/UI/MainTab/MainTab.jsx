import React, { useEffect, useState} from 'react'

import TabContent from '../Tab/TabContent';
import TabNavItem from '../Tab/TabNavItem';
import './Tab.css'

const MainTab = () => {
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

          <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
          <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.on templates, websites, and stock designs. 
            Use our generator to get your own, or read on for the authoritative history of lorem ipsum
          </p>

          </div>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>Tab 2 works!</p>
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