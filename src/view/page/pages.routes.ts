import { RouteRecordRaw } from "vue-router";
// import LayoutDefaut from "@/components/layout/defaultLayout/index.vue";
// import LayoutChild from "@/components/layout/childLayout/index.vue";
// import LayoutHome from "@/components/layout/layoutHome/index.vue";
// import LayoutDetail from "@/components/layout/layoutDetail/index.vue";
// import { isMobile } from "@/utils/common";
// import { translate } from "@/languages/i18n";

export default (): RouteRecordRaw[] => {
  // if (!isMobile()) {
    return [
      {
        path: "/homepahe",
        name: "homepahe",
        component: () => import("./homepage/index.vue"),
        meta: {
          title: 'homepage',
          publicRoute: true,
        },
      },
    ];
  // } else {
  //   return [
  //     {
  //       path: "/x-360/mobile",
  //       name: "mobile",
  //       component: () => import("./mobileScreen/index.vue"),
  //       meta: {
  //         title: translate("X360"),
  //         publicRoute: true,
  //       },
  //     },
  //   ];
  // }
};
