import React, { useCallback, useEffect, useMemo, useState } from "react";
import BoardHeader from "./BoardHeader";
import "./style.css";
import {
  getBoardColumns,
  getDataByViewState,
  getMapByKey,
} from "../../helpers/utils";
import BoardColumn from "./BoardColumn";
import { BoardContext, initialViewState } from "./state";
import { BOARD_VIEW_STATE_KEY, displayOptions } from "../../helpers/constants";

const Board = () => {
  const [display, setDisplay] = useState(
    JSON.parse(localStorage.getItem(BOARD_VIEW_STATE_KEY)) || initialViewState
  );
  const [boardData, setBoardData] = useState(null);
  const isGroupByUser =
    displayOptions.grouping.options.user === display.grouping;

  const handleDisplayChange = useCallback((e) => {
    const { name, value } = e.target;
    const _tempDisplay = { ...display, [name]: value };
    localStorage.setItem(BOARD_VIEW_STATE_KEY, JSON.stringify(_tempDisplay));
    setDisplay(_tempDisplay);
  }, [display]);
  const usersMap = useMemo(() => {
    return boardData?.users?.length > 0
      ? getMapByKey("id", boardData?.users)
      : {};
  }, [boardData]);
  const columns = useMemo(() => {
    return isGroupByUser ? usersMap : getBoardColumns(display.grouping);
  }, [usersMap, display]);
  const dataByGroup = useMemo(() => {
    return getDataByViewState(
      display.grouping,
      display.ordering,
      boardData?.tickets
    );
  }, [boardData, display, getDataByViewState]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setBoardData(data);
      } catch (error) {}
    })();
  }, []);
  return (
    <BoardContext.Provider value={{ display, usersMap, isGroupByUser }}>
      <div>
        <BoardHeader handleDisplayChange={handleDisplayChange} />
        <div className="board__content">
          <div className="board__scrollable-content">
            {Object.keys(columns).map((key) => {
              return (
                <BoardColumn
                  columnData={dataByGroup[key]}
                  key={key}
                  headerData={columns[key]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </BoardContext.Provider>
  );
};

export default Board;
