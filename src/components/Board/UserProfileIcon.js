import React from "react";
import { generateRandomHexColorCode, getInitials } from "../../helpers/utils";

const UserProfileIcon = ({ url, userName }) => {
  return (
    <div>
      <div
        style={{
          background: url
            ? `url("${url}") no-repeat fixed center`
            : generateRandomHexColorCode(),
        }}
        className="board__card-user-profile"
      >
        {!url && userName && <span>{getInitials(userName)}</span>}
      </div>
    </div>
  );
};

export default UserProfileIcon;
