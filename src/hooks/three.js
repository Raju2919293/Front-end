import React, { useContext } from 'react';
import { ContextValue } from './one';

function Three({children}) {
  const name  = useContext(ContextValue)
    return (
        <div  className="ab">
            {name}

          <img   className="ab"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3999/Tilt-Shift_-_Cityscene.jpg"/>
        </div  >
    );
}

export default Three;