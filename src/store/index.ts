import { RootState } from "./store.type";
import { createStore, ModuleTree, Module } from "vuex";
import rootModule from "./modules/root";
import { RootModuleType } from "./modules/root/root.types";

const modules: ModuleTree<RootState> = {
  rootModule,
};

const root: Module<RootState, RootState> = {
  modules,
};

// create Store
export const store = createStore<RootState>({
  ...root,
});

// tyscripts modules
type StoreModules = {
  rootModule: RootModuleType;
};
export type Store = RootModuleType<Pick<StoreModules, "rootModule">>;
