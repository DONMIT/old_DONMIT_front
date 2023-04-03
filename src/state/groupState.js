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
    groupSize: Number,
    groupJoin: true,
    groupCommit: Number,
    groupFine: 100,
    groupDistribution: true
  }
});

export { 
  GroupTabState,
  CreateGroupState
};
