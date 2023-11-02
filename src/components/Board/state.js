import { createContext } from "react";
import { displayOptions } from "../../helpers/constants";
export const initialViewState = {
  grouping: displayOptions.grouping.options.status,
  ordering: displayOptions.ordering.options.priority,
};
export const BoardContext = createContext({
  display: initialViewState,
  usersMap: {},
  isGroupByUser: false,
});
