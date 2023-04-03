import { atom } from "recoil";

const GroupTabState = atom({
  key: "tabmenuindex",
  default: 0,
});

const CreateGroupState = atom({
  key: "creategroup",
  default: {
    groupTitle: "",
    groupIntro: "",
    groupVisibility: true,
    groupSize: 20,
    groupJoin: true,
    groupCommit: 5,
    groupFine: 100,
    groupDistribution: true
  }
});

const GetGroupInfoState = atom({
  key: "groupinfo",
  default: {
    groupTitle: "그룹명 테스트"
  }
})

export { 
  GroupTabState,
  CreateGroupState,
  GetGroupInfoState
};
