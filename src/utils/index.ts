import axios from "axios";
import { TOKEN } from "@/constants/index";

export const setHeaders = (header: any): void => {
  axios.defaults.headers.common = header;
};

export const getToken = () => {
  const token = window.localStorage.getItem(TOKEN);
  // token not exists
  if (!token) {
    clearStorage();
    return undefined;
  }

  return JSON.parse(token);
};

export const setUser = (data) => {
  return window.localStorage.setItem("user", data);
};

export const getUser = () => {
  if (window.localStorage.getItem("user") !== null) {
    return JSON?.parse(window.localStorage.getItem("user") || "");
  } else {
    return {};
  }
};

export const setToken = (token: any) => {
  localStorage.setItem(TOKEN, token);
};

export const clearStorage = async () => {
  (Object.keys(window.localStorage) || []).forEach((key) => {
    window.localStorage.removeItem(key);
  });
};

export const checkHasPermission = (value) => {
  let permissions = getUser()?.data?.permissions;
  return !permissions.includes(value) ? false : true;
};

export const convertViToEn = (str: any) => {
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return str.toLowerCase();
};

// Get the dimensions of a block
export const getHeightWidth = (containerName: string, zoom: number) => {
  const divElement = document.querySelector(`.${containerName}`);

  // Get width and height of container
  const width = Number(divElement?.clientWidth) * zoom;
  const height = Number(divElement?.clientHeight) * zoom;

  return { height, width };
};

export const setDataEvaluted = (data) => {
  return window.localStorage.setItem("dataEvaluted", data || []);
};

export const getDataEvaluted = () => {
  if (window.localStorage.getItem("dataEvaluted") !== null) {
    return JSON?.parse(window.localStorage.getItem("dataEvaluted") || "");
  } else {
    return [];
  }
};

export const setLanguage = (data: string) => {
  return window.localStorage.setItem("language", data || "vi");
};

export const getLanguage = () => {
  return window.localStorage.getItem("language") || "vi";
};
