import Head from "next/head";

import Link from "next/link";
import UserReadMe from "@/components/markdown/UserReadMe";
import Search from "@/components/common/Search";

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>DONMIT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search/>
      <hr/>
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
      <Link href={"group/CreateGroup"}>{t("group.group_option.button")}</Link>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}