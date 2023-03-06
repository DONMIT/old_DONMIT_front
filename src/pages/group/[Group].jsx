import { useRouter } from "next/router";

import GroupHeader from "@/components/group/GroupHeader";
import GroupContents from "@/components/group/GroupContents";


const Group = () => {
  const router = useRouter();
  const group_name = router.query.name;
  return(
    <>
      <GroupHeader group_name={group_name}/>
      
      <GroupContents/>
    </>
  )
}

export default Group;