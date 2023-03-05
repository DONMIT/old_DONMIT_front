import TabMenuList from "@/constants/grouptab";

const TabButton = () => {
  return(
    <nav>
      <ul>
        {TabMenuList.TabMenu.map((menu, index) => 
          <li key={index}>{menu.title}</li>
        )}
      </ul>
    </nav>
  )
}

export default TabButton;