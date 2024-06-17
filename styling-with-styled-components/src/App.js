import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Button from './styled-components/Button';
import Circle from './styled-components/sample';
import Dialog from './styled-components/Dialog';
import { useState } from 'react';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`

function App() {

  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  }

  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };

  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  }

  return (
    
    <ThemeProvider theme = {{palette: {blue: '#228be6', gray: '#495057', pink: '#f06595'}}}>    {/* 웹 사이트 디자인 시 메인 색상을 지정 */}
      <>
        {/* <Circle color='red' huge /> */}
        {/* {sample`
          제목: ${props => props.title}
          내용: ${props => props.body}
        `} */}
        <AppBlock>    {/* children component를 둘러싸고 있는 component */}
          <ButtonGroup>
            <Button size='large'>Button</Button>
            <Button>Button</Button>
            <Button size='small'>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color='gray' size='large'>Button</Button>                
            <Button color='gray'>Button</Button>
            <Button color='gray' size='small'>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color='pink' size='large'>Button</Button>                
            <Button color='pink'>Button</Button>
            <Button color='pink' size='small'>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button outline size='large'>Button</Button>                
            <Button outline color='gray'>Button</Button>
            <Button outline color='pink' size='small'>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button fullWidth>Button</Button>                
            <Button color='gray' fullWidth>Button</Button>
            <Button color='pink' fullWidth onClick={onClick}>삭제2</Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog title="정말 삭제?" confirmText="삭제" cancelText="취소" onConfirm={onConfirm} onCancel={onCancel} visible={dialog}>
        데이터 삭제?
        </Dialog>
      </>
    </ThemeProvider>
    
  );
}

export default App;
