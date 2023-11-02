import React, { useContext } from "react";
import * as constants from "../../helpers/constants";
import { renderIcon } from "../../helpers/utils";
import UserProfileIcon from "./UserProfileIcon";
import { MdCircle } from "react-icons/md";
import { BoardContext } from "./state";
const BoardCard = ({ data }) => {
  const {
    display: { grouping },
    usersMap,
    isGroupByUser,
  } = useContext(BoardContext);
  const isGroupByStatus =
    grouping === constants.displayOptions.grouping.options.status;
  const isGroupByPriority =
    grouping === constants.displayOptions.grouping.options.priority;
  const statusIcon =
    !isGroupByStatus && constants.statusMap?.[data.status]?.icon;
  const priorityIcon =
    !isGroupByPriority && constants.priorityMap?.[data.priority]?.icon;
  const userDetails = !isGroupByUser && usersMap[data.userId];
  return (
    <div className="board__card border--gray">
      <div>
        <p className="text text--light">{data.id}</p>
        <div className="flex gap-2 board__card-title-wrapper">
          {statusIcon && (
            <div className="board__card-icon">{renderIcon(statusIcon)}</div>
          )}
          <p className="text">{data.title}</p>
        </div>
        <div className="flex align-center gap-2">
          {priorityIcon && renderIcon(priorityIcon)}
          {data.tag.map((tag) => {
            return (
              <div
                key={`card-tag-${tag}`}
                className="border--gray gap-1 board__card-feature"
              >
                {renderIcon(MdCircle)}
                <p className="text--light">{tag}</p>
              </div>
            );
          })}
        </div>
      </div>
      {!isGroupByUser && <UserProfileIcon userName={userDetails.name} />}
    </div>
  );
};

export default BoardCard;
