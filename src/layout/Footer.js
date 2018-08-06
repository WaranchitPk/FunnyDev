import React from "react";
import './style/footer.css'
import {Typography} from "@material-ui/core";
const styles = {
  Typography: {
    marginTop: '2.5%'
  }
};
const Footer = () => {
  return (
    <div className='footer'>
      <Typography variant='Caption' style={styles.Typography}>
        Copy c 2018, ARIT RMUTL, Rajamangala University of Technology Lanna
      </Typography>
    </div>
  );
};

export default Footer;
