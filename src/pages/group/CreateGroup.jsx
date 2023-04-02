import { useState } from "react";
import { t } from "i18next";

import GroupOption from "@/constants/groupoption";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Radio from "@/components/common/Radio";
import Select from "@/components/common/Select";
import Image from "next/image";

const CreateGroup = () => {
  // Group Title
  const [ groupTitle, setGroupTitle ] = useState("");
  const onChangeGroupTitle = (e) => {
    setGroupTitle(e.target.value)
  };
  // Group Intro
  const [ groupIntro, setGroupIntro ] = useState("");
  const onChangeGroupIntro = (e) => {
    setGroupIntro(e.target.value)
  };
  // Groyp Visibility

  // Group Join

  // Group Size

  // Group Commit

  // Group Fine
  const [ groupFine, setGroupFine ] = useState("");
  const onChangeGroupFine = (e) => {
    setGroupFine(e.target.value)
  };
  // Group Distribution
  return(
    <div className="create_group_form">
      <div className="group_thumbnail flex flex_ai_c">
        <div className="img_box">
          <Image src="" alt=""/>
        </div>
      </div>
      <div className="group_name flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_name")}</div>
        <Input value={groupTitle} onChange={onChangeGroupTitle} label={true}/>
      </div>
      <div className="group_intro flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_intro")}</div>
        <Input value={groupIntro} onChange={onChangeGroupIntro} label={true}/>
      </div>
      <div className="group_size flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_size")}</div>
        <Select values={GroupOption.Size}/>
      </div>
      <div className="group_visibility flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_visibility")}</div>
        <div className="radio_box">
          <Radio name={"group_visivilty"} id={"public"} txt={t("common.public")} isChecked={true}/>
          <Radio name={"group_visivilty"} id={"private"} txt={t("common.private")}/>
        </div>
      </div>
      <div className="group_join_method flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_join_method")}</div>
        <div className="radio_box">
          <Radio name={"join_method"} id={"auto"} txt={t("common.auto_join")} isChecked={true}/>
          <Radio name={"join_method"} id={"approval"} txt={t("common.manager_approval")}/>
        </div>
      </div>
      <div className="group_commit_count flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_commit_count")}</div>
        <Select values={GroupOption.Commit}/>
      </div>
      <div className="group_fine flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_fine")}</div>
        <Input  value={groupFine} onChange={onChangeGroupFine} label={true} types={"number"} step={25}/>
      </div>
      <div className="group_distribution flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_distribution")}</div>
        <div className="radio_box">
          <Radio name={"distribution_method"} id={"ranking"} txt={t("common.ranking")} isChecked={true}/>
          <Radio name={"distribution_method"} id={"even"} txt={t("common.even")}/>
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