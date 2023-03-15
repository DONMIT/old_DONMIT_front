import React from "react";
import ReactMarkdown from "react-markdown";

const UserReadMe = () => {
  const readMkardown = `### Hi there 👋

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fkkt9102%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)                 

![kkt9102's github stats](https://github-readme-stats.vercel.app/api?username=kkt9102&show_icons=true)
`

  return (
    <ReactMarkdown>{readMkardown}</ReactMarkdown>
  )
};

export default UserReadMe;