import { useRecoilState, useRecoilValue } from "recoil";
import { t } from "i18next";

import GroupOption from "@/constants/groupoption";

import { CreateGroupState,GetGroupInfoState } from "@/state/groupState";

import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Radio from "@/components/common/Radio";
import Button from "@/components/common/Button";

const GroupSetting = () => {
  const GroupName = useRecoilValue(GetGroupInfoState)
  return(
    <div>
      {/* 그룹 썸네일영역 */}
      <div className="group_name flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_name")}</div>
        <Input defaultValue={GroupName.groupTitle} readOnly={true}/>
      </div>
      <div className="group_intro flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_intro")}</div>
        <Input />
      </div>
      <div className="group_size flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_size")}</div>
        <Select arrItem={GroupOption.Size} name={"groupSize"}/>
      </div>
      <div className="group_visibility flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_visibility")}</div>
        <div className="radio_box">
          <Radio name={`groupVisibility`} value={true} id={"public"} txt={t("common.public")} isChecked={true}/>
          <Radio name={`groupVisibility`} value={false} id={"private"} txt={t("common.private")}/>
        </div>
      </div>
      <div className="group_join_method flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_join_method")}</div>
        <div className="radio_box">
          <Radio name={`groupJoin`} value={true} id={"auto"} txt={t("common.auto_join")} isChecked={true}/>
          <Radio name={`groupJoin`} value={false} id={"approval"} txt={t("common.manager_approval")}/>
        </div>
      </div>
      <div className="group_commit_count flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_commit_count")}</div>
        <Select arrItem={GroupOption.Commit} name={"groupCommit"}/>
      </div>
      <div className="group_fine flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_fine")}</div>
        <Input value={CreateGroupState.groupFine} label={true} types={"number"} name={"groupFine"} step={25}/>
      </div>
      <div className="group_distribution flex flex_ai_c">
        <div className="input_title">{t("group.group_option.group_distribution")}</div>
        <div className="radio_box">
          <Radio name={`groupDistribution`} value={true} id={"ranking"} txt={t("common.ranking")} isChecked={true}/>
          <Radio name={`groupDistribution`} value={false} id={"even"} txt={t("common.even")}/>
        </div>
      </div>
      <div className="btn_box flex flex_jc_sb">
        <Button txt={"저장"}/>
        <Button txt={"취소"}/>
      </div>
    </div>
  )
}

export default GroupSetting;