import { useRecoilState } from 'recoil';
import { useTranslation } from 'next-i18next';

import { LanguagePopupState } from '@/state/common';

const LanguageSetting = () => {
  const { t } = useTranslation('common');
  // Language Change Popup
  const [ langPopup, setLangPopup ] = useRecoilState(LanguagePopupState);
  const handleTogglePopup = () => {
    setLangPopup(langPopup=>!langPopup);
  };
  // Language Setting
  const LangSelect = [
    {
      link: "/ko",
      title: `${t("header.menu_2.kor")}`
    },
    {
      link: "/en",
      title: `${t("header.menu_2.eng")}`
    }
  ];

  return(
    <div className="lang_type relative cursor_p">
      <div className="title" onClick={handleTogglePopup}>{t("header.menu_2.title")}</div>
      <ul className={`${langPopup === true ? "active" : ""} popup absolute`}>
        {LangSelect.map((item, index) => 
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        )}
      </ul>
    </div>
  )
}


export default LanguageSetting;