const scaleName = {
   c : 'Celcius',
   f: 'Fahrenheit'
}

const TemperatureInput = ({ temperature, handleTemperatureCheck, scale }) => {
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleName[scale]}</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e)=>handleTemperatureCheck(e, scale)}
      />
    </fieldset>
  );
};

export default TemperatureInput;
