import { useState } from 'react';
import './App.css';
import Button from './component/Button';
import Box from './cssmodule/Box';
import CheckBox from './cssmodule/component/CheckBox';

function App() {

  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };

  return (
   
    <div className="App">
       {/*
      <div className='button'>
        <Button size={"large"} onClick={() => alert('클릭')}>Button</Button>
        <Button>Button</Button>
        <Button size={"small"}>Button</Button>
      </div> 
      <div className='button'>
        <Button size={"large"} color={"blue"}>Button</Button>
        <Button>Button</Button>
        <Button size={"small"} color={"blue"}>Button</Button>
      </div>
      <div className='button'>
        <Button size={"large"} color={"pink"}>Button</Button>
        <Button>Button</Button>
        <Button size={"small"} color={"pink"}>Button</Button>
      </div>
      <div className='button'>
        <Button size={"large"} color={"gray"} outline>Button</Button>
        <Button outline>Button</Button>
        <Button size={"small"} color={"pink"} outline>Button</Button>
      </div>
      <div className='button'>
        <Button size={"large"} color={"blue"} fullWidth>Button</Button>
        <Button size={"large"} fullWidth>Button</Button>
        <Button size={"large"} color={"pink"} fullWidth>Button</Button>
      </div> */}

      {/* <Box /> */}

      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
          <b>check : </b>
          {check ? 'true' : 'false'}
      </p>
    </div> 
   
  );
}

export default App;
