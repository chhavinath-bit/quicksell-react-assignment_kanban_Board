import {
  LuCircleDashed,
  LuCircle,
  LuCheckCircle2,
  LuClock8,
  LuXCircle,
} from "react-icons/lu";
import {
  PiCellSignalHighDuotone,
  PiCellSignalLowDuotone,
  PiCellSignalMediumDuotone,
} from "react-icons/pi";
import { BiSolidError } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";

export const priorityMap = {
  0: {
    name: "No priority",
    icon: MdMoreHoriz,
  },
  1: {
    name: "Low",
    icon: PiCellSignalLowDuotone,
  },
  2: {
    name: "Medium",
    icon: PiCellSignalMediumDuotone,
  },
  3: {
    name: "High",
    icon: PiCellSignalHighDuotone,
  },
  4: {
    name: "Urgent",
    icon: BiSolidError,
  },
};

export const statusMap = {
  "In progress": {
    name: "In progress",
    icon: LuClock8,
  },
  Backlog: {
    name: "Backlog",
    icon: LuCircleDashed,
  },
  Todo: {
    name: "Todo",
    icon: LuCircle,
  },
  Done: {
    name: "Done",
    icon: LuCheckCircle2,
  },
  Canceled: {
    name: "Canceled",
    icon: LuXCircle,
  },
};
export const displayOptions = {
  grouping: {
    title: "Grouping",
    key: "grouping",
    options: { status: "status", user: "userId", priority: "priority" },
  },
  ordering: {
    title: "Ordering",
    key: "ordering",
    options: {
      priority: "priority",
      titile: "title",
    },
  },
};
export const BOARD_VIEW_STATE_KEY = "board-view-state";
