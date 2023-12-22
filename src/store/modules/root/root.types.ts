import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";
import { ROOT_STORE } from "@/store/constants";
export type RootStateTypes = {
  showSidebar: boolean;
  loading: boolean;
};

export interface RootGettersTypes {
  [ROOT_STORE.GETTERS.GET_SHOW_SIDEBAR](state: RootStateTypes): any;
}

export type RootMutationTypes<S = RootStateTypes> = {
  [ROOT_STORE.MUTATIONS.SET_SHOW_SIDEBAR](state: S, payload: any): void;
};

export interface RootActionTypes {
  [ROOT_STORE.ACTIONS.SET_SHOW_SIDEBAR]({ commit }: any, payload: any): void;
}

export type RootModuleType<S = RootStateTypes> = Omit<VuexStore<S>, "commit" | "getters" | "dispatch"> & {
  commit<K extends keyof RootMutationTypes, P extends Parameters<RootMutationTypes[K]>[1]>(key: K, payload?: P, options?: CommitOptions): ReturnType<RootMutationTypes[K]>;
} & {
  getters: {
    [K in keyof RootGettersTypes]: ReturnType<RootGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof RootActionTypes>(key: K, payload?: Parameters<RootActionTypes[K]>[1], options?: DispatchOptions): ReturnType<RootActionTypes[K]>;
};
