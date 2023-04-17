import { useEffect } from "react";
import { useRouter } from "next/router";

import UserContents from "@/components/user/UserContents"

const Users = () => {
  const router = useRouter();

  useEffect(() => {
      sessionStorage.setItem("page_info","user")
    },)
  return(
    <>
      <UserContents/>
    </>
  )
}
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     // common 은 위 locales/ko 아래에 만든 json 파일 명이다. 다른 파일을 사용한다면 바꿔주자.
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });
export default Users