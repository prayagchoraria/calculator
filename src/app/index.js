import {useReducer} from 'react'
import styled from 'styled-components';
import KeyPad from '../components/keypad';
import reducer, {INITIAL_STATE} from '../reducer';
import Menu from '../components/menu';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Calculator = styled.div`
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
        <Menu
          dispatch={dispatch}
          scientificMode={store.scientificMode}
        />

        <Display>
          {store.display}
        </Display>

        <KeyPad
          dispatch={dispatch}
          scientificMode={store.scientificMode}
        />
      </Calculator>
    </Wrapper>
  );
}

export default App;
