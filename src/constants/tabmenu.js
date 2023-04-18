import { t } from "i18next";
// import { useTranslation } from 'next-i18next';

const GroupTabMenu = [
  {
    title: `${t("group.tabmenu_name.menu_1")}`,
    roles: 0,
    type: 0,
  },
  {
    title: `${t("group.tabmenu_name.menu_2")}`,
    roles: 1,
    type: 0,
  },
  {
    title: `${t("group.tabmenu_name.menu_3")}`,
    roles: 2,
    type: 0,
  },
  {
    title: `${t("group.tabmenu_name.menu_4")}`,
    roles: 0,
    type: 1,
  },
];

const UserTabMenu = [
  {
    title: `${t("user.tabmenu_name.menu_1")}`,
  },
  {
    title: `${t("user.tabmenu_name.menu_1")}`,
  }
];

const TabMenuList = { 
  GroupTabMenu,
  UserTabMenu
};

export default TabMenuList;
