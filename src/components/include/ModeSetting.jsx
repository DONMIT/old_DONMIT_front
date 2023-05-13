import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { LoginState } from "@/state/loginState";
import { ModeState } from "@/state/common";

const ModeSetting = () => {
  // Page DarkMode Setting
  const [ darkMode, setDarkMode ] = useRecoilState(ModeState);
  const isLogin = useRecoilValue(LoginState);
  const handleModeChange = (e) => {
    setDarkMode(e.target.checked);
    // 로그인 기능 구현 후 로그인 시 저장된 모드 설정값 대체 예정
    // localStorage.setItem("Mode",e.target.checked);
  };

  // useEffect(() => {
  //   {
  //     isLogin.isLogin === true ?
  //     setDarkMode(true)
  //     :
  //     setDarkMode(localStorage.getItem("Mode"))
  //   }
  // },[])

  console.log("로그인 관련 다크모드 테스트",darkMode);
  return(
    <div className="mode_type relative">
      {/* <input id="mode" type="checkbox" name="mode" className="absolute cursor_p" checked={Boolean(darkMode)} onChange={handleModeChange}/> */}
      <input id="mode" type="checkbox" name="mode" className="absolute cursor_p" checked={darkMode} onChange={handleModeChange}/>
      <label htmlFor="mode" className="absolute"></label>
    </div>
  )
}

export default ModeSetting;