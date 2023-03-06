import { useRecoilState } from "recoil";

import {GroupTabState} from "@/state/groupState";

import TabMenuList from "@/constants/grouptab";

const TabButton = () => {
  const [ tabIndex, setTabIndex ] = useRecoilState(GroupTabState);
  return(
    <ul className="flex">
      {TabMenuList.TabMenu.map((menu, index) => 
        <li key={index}>{menu.title}</li>
      )}
    </ul>
  )
}

export default TabButton;