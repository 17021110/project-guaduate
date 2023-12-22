import { mutations } from "./root.mutations";
import { getters } from "./root.getters";
import { actions } from "./root.actions";

import { Module } from "vuex";
import { RootState } from "@/store/store.type";
import { RootStateTypes } from "./root.types";

export const state: RootStateTypes = {
  showSidebar: true,
  loading: false,
};

const rootModule: Module<RootStateTypes, RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export default rootModule;
