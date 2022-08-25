import React, { useState } from 'react';
import {
  ColorPicker,
  Clock,
} from '../../components';
import './main.css';

const ClockPage = () => {
  const [bgColor, setBgColor] = useState([0, 0, 0])
  const [fgColor, setFgColor] = useState([0, 0, 0])


  return (
    <div className='clock-outer-container'>

      <div className='clock-container'>
        <Clock
          bgColor={`rgba(${ bgColor[0] }, ${ bgColor[1] }, ${ bgColor[2] }, 0.25)`}
          fgColor={`rgb(${ fgColor[0] }, ${ fgColor[1] }, ${ fgColor[2] })`}
        />

        <div className="colors">
          <ColorPicker 
            onChange={ 
              ({ red, green, blue }) => 
                setBgColor([red, green, blue]) 
            } 
          />
          <ColorPicker
            onChange={ 
              ({ red, green, blue }) => 
                setFgColor([red, green, blue]) 
            } 
          />
        </div>

      </div>
    </div>
  );
};

export default ClockPage;