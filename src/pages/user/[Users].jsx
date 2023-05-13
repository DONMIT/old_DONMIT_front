import { useEffect } from "react";
import { useRouter } from "next/router";

import UserHeader from "@/components/user/UserHeader";
import UserContents from "@/components/user/UserContents"

const Users = () => {
  const router = useRouter();

  useEffect(() => {
      sessionStorage.setItem("page_info","user")
    },)
  return(
    <>
      <UserHeader/>
      <UserContents/>
    </>
  )
}
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });
export default Users