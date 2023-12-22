import { toast } from "vue3-toastify";
import format from "date-fns/format";
import parse from "date-fns/parse";
import isBefore from "date-fns/isBefore";

const checkResponse = (
  response,
  success = (response) => {},
  fail = (response) => {
    toast.error(response.message || "Lỗi");
  },
) => {
  if (response.code === "200") {
    success(response.data);
  } else {
    fail(response.data);
  }
};

const formatDate = (date, formatType) => {
  let result = "";
  if (date) result = format(new Date(date), formatType || "dd/MM/yyyy HH:mm:ss");
  return result;
};

const compareDate = (date1, date2) => {
  const temp1 = new Date(date1);
  const temp2 = new Date(date2);
  return isBefore(temp1, temp2);
};

const convertDate = (date, formatType) => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  const formattedDate = format(parsedDate, formatType || "yyyy-MM-dd HH:mm:ss");
  return formattedDate;
};

const formatMoney = (format, price) => {
  let result = new Intl.NumberFormat(format).format(price);
  return result;
};

const sumaryNumber = (num: number) => {
  let result: any = 0;
  if (num) {
    let a = num * 100;
    result = a.toString().split(".")[0];
  }
  return Number(result) / 100;
};

const isMobile = () => {
  if (screen.width <= 760) {
    return true;
  } else {
    return false;
  }
};

const removeNullObjects = (obj) => {
  return Object.entries(obj).reduce((a, [k, v]) => (v === null || v === "" ? a : ((a[k] = v), a)), {});
};

const flattenSubCapacities = (tree) => {
  let result = [];

  function traverse(node) {
    if (node.subCapacities && node.subCapacities.length > 0) {
      result = result.concat(node.subCapacities);
      node.subCapacities.forEach(traverse);
    }
  }

  tree.forEach(traverse);

  return result;
};

const shadeColor = (hexColor, magnitude) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};
const hexToRGB = (hex, alpha) => {
  let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

const validateInteger = (evt) => {
  let theEvent = evt;

  // Handle paste
  if (theEvent.type === 'paste') {
    key = evt.clipboardData.getData('text/plain');
  } else {
  // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }

  var regex = /[0-9]|\./;
  if( (!regex.test(key) || Number(key) < 0) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

const getColorFromPercentage = (percentageString) => {
  const percentage = parseInt(percentageString, 10);
  if (percentage > 100) {
    return "!tw-text-[#31C340]";
  } else if (percentage === 100) {
    return "!tw-text-[#1890FF]";
  } else if (percentage > 80) {
    return "!tw-text-[#FAAD14]";
  } else {
    return "!tw-text-[#C41307]";
  }
};

const getColorFromPercentageNew = (percentageString) => {
  const percentage = parseInt(percentageString, 10);
  if (percentage >= 100) {
    return "!tw-text-[#31C340]";
  } else if (percentage > 80) {
    return "!tw-text-[#FAAD14]";
  } else {
    return "!tw-text-[#C41307]";
  }
};

const formatLongLetterrs = (value, quantityLetters) => {
  let words = value.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if ((i + 1) % quantityLetters === 0) {
      result += "\n";
    } else {
      result += " ";
    }
  }
  return result.trim();
};

export { checkResponse, removeNullObjects, flattenSubCapacities, getColorFromPercentage, formatDate, convertDate, compareDate, formatMoney, isMobile, sumaryNumber, shadeColor, hexToRGB, validateInteger, formatLongLetterrs,getColorFromPercentageNew };
