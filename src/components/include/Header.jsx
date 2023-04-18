import Head from "next/head";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';

import { CreateGroupState } from "@/state/groupState";
import { LoginState } from "@/state/loginState";
import ModeSetting from "./ModeSetting";

import Empty from "public/assets/empty.png";
import LanguageSetting from "./LanguageSetting";
import Button from "../common/Button";

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const PageTitle = router.query.name;

  const Test = useRecoilValue(CreateGroupState);
  const isLogin = useRecoilValue(LoginState);

  console.log("테스트 코드",Test)
  return(
    <>
      <Head>
        <title>DONMIT {PageTitle !== null ? " | " +PageTitle : ""}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header_bar">
        <ul className="flex flex_jc_sb flex_ai_c flex_basis_100">
          <li className="logo">
            <Image src={Empty} alt="" width={40} height={40}/>
          </li>
          <li className="rank_menu">
            
          </li>
          <li title="이건 프로젝트 다크모드버튼입니다. 일단 만들어놨어요. 퍼블은 나중에!">
            <ModeSetting/>
          </li>
          <li className="lang">
            <LanguageSetting/>
          </li>
          <li>
            {isLogin === true ?
              <>
                <Button txt={"User ID"}/>
                <div className="thumb">
                  <Image src={Empty} alt="" width={40} height={40}/>
                </div>
              </>
              :
              <Button txt={t("header.button")}/>
            }
          </li>
        </ul>
      </header>   
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    // common 은 위 locales/ko 아래에 만든 json 파일 명이다. 다른 파일을 사용한다면 바꿔주자.
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Header;