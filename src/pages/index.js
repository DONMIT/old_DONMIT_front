import Head from "next/head";
// import { Inter } from "@next/font/google";

import Link from "next/link";
import UserReadMe from "@/components/markdown/UserReadMe";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>DONMIT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Front Source</div>
      <Link
        href={{ pathname: `group/Group`, query: { name: "DONMIT_GROUP_NAME", page_type: "group" } }}
        as={"group/Group"}
      >
        Test Link (그룹명 : DONMIT_GROUP)
        {/* ReadMe Test */}
        <UserReadMe />
      </Link>
      <hr/>
      <Link 
        href={{ pathname: `user/Users`, query: { name: "USER_INFO", page_type: "user"} }}
        as={"user/Users"}
      >
        사용자 정보 페이지 가보기
      </Link>
      <hr/>
      <Link
        href={"group/CreateGroup"}>그룹생성</Link>
    </>
  );
}
