import { useRecoilValue } from "recoil";

import { GroupTabState } from "@/state/groupState";

import TabButton from "../common/TabButton";
import GroupStatistics from "./tabmenu/GroupStatistics";
import GroupMenber from "./tabmenu/GroupMenber";
import GroupSetting from "./tabmenu/GroupSetting";
import GroupJoinUserList from "./tabmenu/GroupJoinUserList";

const GroupContents = () => {
  const TabNum = useRecoilValue(GroupTabState);
  return(
    <>
      <div className="group_contents">
        <TabButton/>
        <div className="tab_contents relative">
          {TabNum === 0 ?
            <GroupStatistics/> :
            (TabNum === 1 ?
              <GroupMenber/> :
              (TabNum === 2 ? 
                <GroupSetting/> 
                :
                <GroupJoinUserList/>  
              )  
            )
          }
        </div>
      </div>
    </>
  )
}

export default GroupContents;