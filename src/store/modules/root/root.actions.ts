import { ROOT_STORE } from "@/store/constants";
type CommitType = {
  commit: any;
};
export const actions = {
  [ROOT_STORE.ACTIONS.SET_SHOW_SIDEBAR]({ commit }: CommitType, payload: boolean): void {
    commit(ROOT_STORE.MUTATIONS.SET_SHOW_SIDEBAR, payload);
  },
  [ROOT_STORE.ACTIONS.SET_LOADING]({ commit }: CommitType, payload: boolean): void {
    commit(ROOT_STORE.MUTATIONS.SET_LOADING, payload);
  },
};
