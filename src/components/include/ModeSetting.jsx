import { useRecoilState } from "recoil";
import { ModeState } from "@/state/common";

const ModeSetting = () => {
  // Page DarkMode Setting
  const [ darkMode, setDarkMode ] = useRecoilState(ModeState);
  const handleModeChange = (e) => {
    setDarkMode(e.target.checked);
  }
  return(
    <div className="mode_type relative">
      <input id="mode" type="checkbox" name="mode" className="absolute cursor_p" checked={darkMode} onChange={handleModeChange}/>
      <label htmlFor="mode" className="absolute"></label>
    </div>
  )
}

export default ModeSetting;