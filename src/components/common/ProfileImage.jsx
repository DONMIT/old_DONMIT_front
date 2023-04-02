import Image from "next/image";

const ProfileImage = ({images}) => {
  return(
    <div className="thumbnail">
      <div className="img_box">
        <Image src={images} alt="" width={260} height={260}/>
      </div>
    </div>
  )
};

export default ProfileImage;