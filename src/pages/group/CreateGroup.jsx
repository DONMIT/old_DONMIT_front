import { useRecoilState } from "recoil";
import { t } from "i18next";

import GroupOption from "@/constants/groupoption";

import { CreateGroupState } from "@/state/groupState";

import ProfileImage from "@/components/common/ProfileImage";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Radio from "@/components/common/Radio";
import Select from "@/components/common/Select";
import DropFile from "@/components/common/DropFile";

import Empty from "public/assets/empty.png";

const CreateGroup = () => {
  const [ createGroup, setCreateGroup ] = useRecoilState(CreateGroupState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "groupSize" || name === "groupCommit" || name === "groupFine") {
      newValue = parseInt(value);
    } else if (name === "groupVisibility" || name === "groupJoin" || name === "groupDistribution") {
      newValue = (value === "true");
    }
    setCreateGroup({
      ...createGroup,
      [name]: newValue,
    });
  };

  return(
    <div className="create_group_form">
      <div className="group_thumbnail flex flex_ai_c">
        <ProfileImage images={Empty}/>
        <DropFile accept={".gif, .jpg, .png"} />
      </div>
      <div className="group_name flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_name")}</div>
        <Input value={CreateGroupState.groupTitle} onChange={handleInputChange} label={true} name={"groupTitle"}/>
      </div>
      <div className="group_intro flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_intro")}</div>
        <Input value={CreateGroupState.groupIntro} onChange={handleInputChange} label={true} name={"groupIntro"}/>
      </div>
      <div className="group_size flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_size")}</div>
        <Select arrItem={GroupOption.Size} onChange={handleInputChange} name={"groupSize"}/>
      </div>
      <div className="group_visibility flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_visibility")}</div>
        <div className="radio_box">
          <Radio name={`groupVisibility`} value={true} onChange={handleInputChange} id={"public"} txt={t("common.public")} isChecked={true}/>
          <Radio name={`groupVisibility`} value={false} onChange={handleInputChange} id={"private"} txt={t("common.private")}/>
        </div>
      </div>
      <div className="group_join_method flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_join_method")}</div>
        <div className="radio_box">
          <Radio name={`groupJoin`} value={true} onChange={handleInputChange} id={"auto"} txt={t("common.auto_join")} isChecked={true}/>
          <Radio name={`groupJoin`} value={false} onChange={handleInputChange} id={"approval"} txt={t("common.manager_approval")}/>
        </div>
      </div>
      <div className="group_commit_count flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_commit_count")}</div>
        <Select arrItem={GroupOption.Commit} onChange={handleInputChange} name={"groupCommit"}/>
      </div>
      <div className="group_fine flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_fine")}</div>
        <Input value={CreateGroupState.groupFine} onChange={handleInputChange} label={true} types={"number"} name={"groupFine"} step={25}/>
      </div>
      <div className="group_distribution flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_distribution")}</div>
        <div className="radio_box">
          <Radio name={`groupDistribution`} value={true} onChange={handleInputChange} id={"ranking"} txt={t("common.ranking")} isChecked={true}/>
          <Radio name={`groupDistribution`} value={false} onChange={handleInputChange} id={"even"} txt={t("common.even")}/>
        </div>
      </div>
      <div className="btn_box flex flex_jc_sb">
        <Button txt={t("common.create")}/>
        <Button txt={t("common.cancel")}/>
      </div>
    </div>
  )
}

export default CreateGroup;