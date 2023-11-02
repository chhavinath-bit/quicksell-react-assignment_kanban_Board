import * as constants from "./constants";

export const getDataByViewState = (grouping, ordering, dataList = []) => {
  const dataByGroup = {};
  if (grouping && ordering && dataList.length > 0) {
    const data = dataList.sort((a, b) => {
      let item1 = a[ordering];
      let item2 = b[ordering];
      switch (ordering) {
        case constants.displayOptions.ordering.options.titile:
          item1 = item1?.toLowerCase();
          item2 = item2?.toLowerCase();
          if (item1 < item2) return -1;
          if (item1 > item2) return 1;
          return 0;
        case constants.displayOptions.ordering.options.priority:
          if (item1 > item2) return -1;
          if (item1 < item2) return 1;
          return 0;
        default:
          return 0;
      }
    });
    for (let i = 0; i < data.length; i++) {
      let key = data[i][grouping];
      if (!dataByGroup.hasOwnProperty(key)) {
        dataByGroup[key] = [data[i]];
      } else {
        dataByGroup[key].push(data[i]);
      }
    }
  }

  return dataByGroup;
};

export const getMapByKey = (property, list = []) => {
  let dataMap = {};
  for (let i = 0; i < list.length; i++) {
    if (!dataMap.hasOwnProperty(property)) {
      dataMap[list[i][property]] = list[i];
    }
  }
  return dataMap;
};
export const renderIcon = (Icon, className = "") => {
  return Icon && <Icon className={`icon icon--gray ${className}`} />;
};
export const generateRandomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
export const getInitials = (str = "") => {
  return str
    .split(" ")
    .filter((item) => item)
    .map((item) => item[0])
    .splice(0, 2)
    .join("")
    .toUpperCase();
};
export const getBoardColumns = (grouping) => {
  const keyMap = constants[grouping + "Map"];
  return keyMap || {};
};
export const capitalizeString = (str = "") =>
  str?.charAt(0).toUpperCase() + str.slice(1);
