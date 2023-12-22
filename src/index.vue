<template>
  <component :is="route.meta?.layout || 'div'">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import { useOnline, useRefHistory } from "@vueuse/core";
import { toast } from "vue3-toastify";
import { translate } from "./languages/i18n";

const online = useOnline();
const { history } = useRefHistory(online);
const route = useRoute();
watch(
  () => online.value,
  () => {
    if (!online.value) {
      toast.error(translate("alertNetwork"));
      return;
    } else if (history.value[history.value.length - 1].snapshot !== false && history.value.length > 2) {
      toast.success(translate("alertnetworkDone"));
      return;
    }
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
<style scoped></style>
