import { MutationTree } from "vuex";
import { RootStateTypes } from "./root.types";
import { ROOT_STORE } from "@/store/constants";

export const mutations: MutationTree<RootStateTypes> = {
  [ROOT_STORE.MUTATIONS.SET_SHOW_SIDEBAR](state: RootStateTypes, payload: boolean) {
    state.showSidebar = payload;
  },
  [ROOT_STORE.MUTATIONS.SET_LOADING](state: RootStateTypes, payload: boolean) {
    state.loading = payload;
  },
};
