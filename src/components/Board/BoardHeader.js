import React, { useContext, useState } from "react";
import "./style.css";
import { ContextMenu, ContextMenuItem } from "../ContextMenu/index";
import { displayOptions } from "../../helpers/constants";
import { capitalizeString } from "../../helpers/utils";
import { BoardContext } from "./state";
import { VscSettings } from "react-icons/vsc";
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md";

const BoardHeader = ({ handleDisplayChange }) => {
  const { display } = useContext(BoardContext);
  const [contextMenuTriggerElement, setContextMenuTriggerElement] =
    useState(null);
  const open = Boolean(contextMenuTriggerElement);
  return (
    <div className="board__header">
      <div className="board__header-wrapper">
        <button
          className="button border--gray flex align-center gap-2"
          onClick={(e) => {
            setContextMenuTriggerElement(e.target);
          }}
        >
          Display
        </button>
        <ContextMenu
          open={open}
          onClose={() => setContextMenuTriggerElement(null)}
          triggerElement={contextMenuTriggerElement}
        >
          {Object.keys(displayOptions).map((key) => {
            const data = displayOptions[key];
            return (
              <ContextMenuItem key={`display-option-${data.key}`}>
                <span className="text text--dark">{data.title}</span>
                <select
                  name={data.key}
                  placeholder="select"
                  onChange={handleDisplayChange}
                  value={display[data.key]}
                >
                  {data &&
                    Object.keys(data.options).map((optionKey, index) => {
                      return (
                        <option
                          key={`${data.key}-${optionKey}-${index}`}
                          value={data.options[optionKey]}
                        >
                          {capitalizeString(optionKey)}
                        </option>
                      );
                    })}
                </select>
              </ContextMenuItem>
            );
          })}
        </ContextMenu>
      </div>
    </div>
  );
};

export default BoardHeader;
