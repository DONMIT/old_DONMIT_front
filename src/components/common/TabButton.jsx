import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { GroupTabState } from "@/state/groupState";

import TabMenuList from "@/constants/tabmenu";

const TabButton = () => {
  const route = useRouter();
  const [ page_type, setPageType ] = useState(route.query.page_type)
  // const page_type = route.query.page_type;
  const [ tabIndex, setTabIndex ] = useRecoilState(GroupTabState);
  // TabMenu Move Event
  const handleToggleTabMenu = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    {page_type === undefined ? setPageType(sessionStorage.getItem("page_info")) : route.query.page_type}
  },[route]);

  return(
    <ul className="tab_menu flex">
      {(page_type === "group" ? TabMenuList.GroupTabMenu : TabMenuList.UserTabMenu)
        .map((menu, index) => 
        <li 
          key={index} 
          onClick={() => handleToggleTabMenu(index)} 
          className={`${index === tabIndex ? "active" : ""} cursor_p`}
        >
          {menu.title}
        </li>
      )}
    </ul>
  )
}

export default TabButton;