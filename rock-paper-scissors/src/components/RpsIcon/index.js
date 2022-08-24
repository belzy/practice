import React, { useState } from 'react';
import rock from '../../assets/img/rock.png';
import paper from '../../assets/img/paper.png';
import scissors from '../../assets/img/scissors.png';

const RpsIcon = ({ icon }) => {

  let img;
  if (icon === 'rock') img = rock;
  else if (icon === 'paper') img = paper;
  else if (icon === 'scissors') img = scissors;

  return (

    <img width="100" height="100" src={ img }></img>

  );
};

export default RpsIcon;