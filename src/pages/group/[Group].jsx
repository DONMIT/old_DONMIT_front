import { useRouter } from "next/router";

import GroupHeader from "@/components/group/GroupHeader";


const Group = () => {
  const router = useRouter();
  const group_name = router.query.name;
  return(
    <>
      <GroupHeader group_name={group_name}/>
    </>
  )
}

export default Group;