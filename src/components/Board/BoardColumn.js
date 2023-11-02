import React, { useContext } from "react";
import { MdMoreHoriz, MdAdd } from "react-icons/md";
import { renderIcon } from "../../helpers/utils";
import UserProfileIcon from "./UserProfileIcon";
import BoardCard from "./BoardCard";
import { BoardContext } from "./state";

const BoardColumn = ({ columnData = [], headerData }) => {
  const { isGroupByUser } = useContext(BoardContext);
  return (
    <div className="board__column">
      <div className="board__column-header">
        <div className="board__column-header--options">
          {!isGroupByUser ? (
            renderIcon(headerData?.icon)
          ) : (
            <UserProfileIcon userName={headerData.name} />
          )}
          <p className="text">{headerData.name}</p>
          <span className="text text--gray">{columnData.length}</span>
        </div>
        <div className="board__column-header--options">
          {renderIcon(MdAdd)}
          {renderIcon(MdMoreHoriz)}
        </div>
      </div>
      <div className="board__column-data">
        {columnData.map((item) => (
          <BoardCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
