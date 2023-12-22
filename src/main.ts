import { createApp } from "vue";

import App from "./index.vue";
import { store } from "./store";
import {
  Avatar,
  Badge,
  Tree,
  Steps,
  Select,
  Checkbox,
  Radio,
  Modal,
  Form,
  TreeSelect,
  Upload,
  Button,
  Progress,
  Input,
  Table,
  Pagination,
  Tooltip,
  Empty,
  DatePicker,
  TimePicker,
  Spin,
  InputNumber,
  Skeleton,
  Switch,
  Menu,
  Breadcrumb,
  Collapse,
  Calendar,
  Tabs,
  Tag,
  Dropdown,
  Popover
} from "ant-design-vue";
import router from "./router";

// library
import { i18n } from "./languages/i18n";
import { useI18n } from "vue-i18n";

import vClickOutside from "click-outside-vue3";

import "./assets/styles/tailwind.css";

// toast
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";

// style
import "./style.scss";
// import "ant-design-vue/dist/antd.less";
import "vue3-toastify/dist/index.css";
import "nprogress/nprogress.css";
// import { getUser } from "./utils";

import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);
dayjs.locale("en");
dayjs.locale("vi");

// create app
const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
});

// Register a global custom directive called `v-focus`
app.directive("focus", {
  // When the bound element is mounted into the DOM...
  mounted(el, binding) {
    // Focus the element
    if (binding.value) el.focus();
  },
});

app.directive("focusAntd", {
  // When the bound element is mounted into the DOM...
  mounted(el, binding) {
    // Focus the element
    if (binding.value) {
      el.focus();
      // Get the input element within the current element
      const inputElement = el.querySelector("input");
      if (inputElement) {
        inputElement.focus();
      }
    }
  },
});

// app.directive("hasPermission", {
//   // When the bound element is mounted into the DOM...
//   mounted(el, binding) {
//     if (binding.value) {
//       let permissions = getUser()?.data?.permissions;
//       let value = binding.value.split(",");
//       let flag = true;
//       for (let v of value) {
//         if (!permissions.includes(v)) {
//           flag = false;
//         }
//       }
//       if (!flag) {
//         if (!el.parentNode) {
//           el.style.display = "none";
//         } else {
//           el.parentNode.removeChild(el);
//         }
//       }
//     }
//   },
// });

// use third party lib
app.use(Vue3Toastify, {
  autoClose: 3000,
  dangerouslyHTMLString: true,
} as ToastContainerOptions);
app.use(router);
app.use(i18n);
app.use(store);
app.use(vClickOutside);
app.use(Badge);
app.use(Avatar);
app.use(Form);
app.use(Tree);
app.use(Select);
app.use(Steps);
app.use(Checkbox);
app.use(Radio);
app.use(Modal);
app.use(TreeSelect);
app.use(DatePicker);
app.use(TimePicker);
app.use(Upload);
app.use(Spin);
app.use(InputNumber);
app.use(Input);
app.use(Calendar);
app.use(Button);
app.use(Skeleton);
app.use(Switch);
app.use(Table);
app.use(Pagination);
app.use(Empty);
app.use(Tooltip);
app.use(Progress);
app.use(Menu);
app.use(Breadcrumb);
app.use(Collapse);
app.use(Tag);
app.use(Tabs);
app.use(Dropdown);
app.use(Popover);
// mount app
app.mount("#app");
