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
    sessionStorage.setItem("page_info","group");
  },)
  
  // const setGithubUser = useSetRecoilState(GithubUserState);

  // useEffect(() => {
  //   fetchGithubUser('octocat',setGithubUser)
  // }, []);

  console.log(group_name)
  return(
    <>
      <GroupHeader group_name={group_name}/>
      <GroupContents/>
    </>
  )
}

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });
export default Group;