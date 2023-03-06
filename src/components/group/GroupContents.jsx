import { useRecoilValue } from "recoil";

import { GroupTabState } from "@/state/groupState";

import TabButton from "./tabmenu/TabButton";

const GroupContents = () => {
  const TabNum = useRecoilValue(GroupTabState);
  return(
    <>
      <div className="group_contents">
        <TabButton/>
        <div className="tab_contents relative">
          {/* {TabNum === 1} */}
        </div>
      </div>
    </>
  )
}

export default GroupContents;