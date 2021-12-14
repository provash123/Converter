import React from 'react';

const BoilingVerdict = ({celcius}) => {
    if(celcius >= 100){
       return <p>Water would  boil</p>
    }else{
        return <p>water wouldn't boil</p> 
    }
    
       
}
 
export default BoilingVerdict;