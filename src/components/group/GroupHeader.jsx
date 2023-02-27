import Image from "next/image";

const GroupHeader = ({group_name}) => {
  return(
    <>
      <div className="group_head">
        <div className="img_box">
        </div>
        <div className="title">{group_name}</div>
      </div>
    </>
  )
}

export default GroupHeader;