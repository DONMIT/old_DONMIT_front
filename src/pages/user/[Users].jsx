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

export default Users