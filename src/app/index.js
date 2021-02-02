import {useReducer} from 'react'
import styled from 'styled-components';
import KeyPad from '../components/keypad';
import reducer, {INITIAL_STATE} from '../reducer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Calculator = styled.div`
  width: 500px;
  display: table;
  border: 1px solid #000000;
`;

const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  box-sizing: border-box;
  font-size: 28px;
  padding: 0 5px;
  letter-spacing: 1px;
  text-align: right;
  border: 1px solid #000000;
`;

const App = () => {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Wrapper>
      <Calculator>
        <Display>
          {store.display}
        </Display>
        <KeyPad
          dispatch={dispatch}
        />
      </Calculator>
    </Wrapper>
  );
}

export default App;
