import React from 'react';
import Clock from './Clock'

const ClockList = ({quanttities = []}) => {
 
    return ( 
        <div>
     {quanttities.map(()=>(
         <Clock />
     ))}
     </div>
     );
}
 
export default ClockList;