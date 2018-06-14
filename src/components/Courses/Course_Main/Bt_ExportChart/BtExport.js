import React from "react";
import {Button,Menu} from '@material-ui/core';
const Bt_Export = ({Open,btState,Close}) => (
  <div>
    <Button
      onClick={Open}>
      Export</Button>
    <Menu
      id="simple-menu"
      anchorEl={btState}
      open={Boolean(btState)}
      onClose={Close}
    >
      {/*<MenuItem onClick={(currentChart) => ExToPng}>Export: JPEG</MenuItem>*/}
      {/*<MenuItem onClick={(currentChart) => ExToJpg}>Export: PNG</MenuItem>*/}
    </Menu>
  </div>
);

export default Bt_Export;
