import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { fetchGithubUser } from "@/apis/githubAPI";
import { GithubUserState } from "@/state/githubState";

import GroupHeader from "@/components/group/GroupHeader";
import GroupContents from "@/components/group/GroupContents";


const Group = () => {
  const router = useRouter();
  const group_name = router.query.name;

  useEffect(() => {
  //   {group_name === undefined ?
  //   sessionStorage.setItem("page_info",JSON.stringify(router.query.page_type))
  //   :
  //   "group"
  // }
  sessionStorage.setItem("page_info","group")
  },)
  
  // const setGithubUser = useSetRecoilState(GithubUserState);

  // useEffect(() => {
  //   fetchGithubUser('octocat',setGithubUser)
  // }, []);

  return(
    <>
      <GroupHeader group_name={group_name}/>
      <GroupContents/>
    </>
  )
}

export default Group;