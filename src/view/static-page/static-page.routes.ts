import { RouteRecordRaw } from "vue-router";

export default (): RouteRecordRaw[] => {
  return [
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/static-page/404/index.vue"),
      // Allows props to be passed to the 404 page through route
      // params, such as `resource` to define what wasn't found.
      props: true,
      meta: {
        hideSidebar: true,
        title: "404 Not found",
        screenId: "",
      },
    },
  ];
};
