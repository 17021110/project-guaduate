import { GetterTree } from "vuex";
import { RootState } from "@/store/store.type";

import { RootGettersTypes, RootStateTypes } from "./root.types";
import { ROOT_STORE } from "@/store/constants";
export const getters: GetterTree<RootStateTypes, RootState> & RootGettersTypes = {
  [ROOT_STORE.GETTERS.GET_SHOW_SIDEBAR]: (state: RootStateTypes): boolean => state.showSidebar,
};
