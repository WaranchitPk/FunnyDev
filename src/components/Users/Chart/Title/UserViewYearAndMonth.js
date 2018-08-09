import React from "react";
import { Typography } from "@material-ui/core";

const UserViewYearAndMonth = ({ year, month }) => {
  return (
    <div>
      <Typography variant='title' align="center">
        ผู้เข้าชมระบบ : {year}-{month}
      </Typography>
    </div>
  );
};

export default UserViewYearAndMonth;
