import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';

import './InfoBar.css';
import { Button } from '@mui/material';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <Button variant="contained" color="error">
          Leave Chat
        </Button>
      </a>
    </div>
  </div>
);

export default InfoBar;