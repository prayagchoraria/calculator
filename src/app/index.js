import {useReducer} from 'react'
import styled from 'styled-components';
import KeyPad from '../components/keypad';
import reducer, {INITIAL_STATE} from '../reducer';
import Menu from '../components/menu';
import themes from "../utils/themes";

const Wrapper = styled.div`
  align-items: center;
  background: ${props => themes[props.theme].pageBackground};
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const Calculator = styled.div`
  background: ${props => themes[props.theme].pageBackground};
  border: 1px solid ${props => themes[props.theme].font};
  display: table;
`;

const Display = styled.div`
  align-items: center;
  border: 1px solid ${props => themes[props.theme].font};
  box-sizing: border-box;
  color: ${props => themes[props.theme].font};
  display: flex;
  font-size: 28px;
  height: 60px;
  justify-content: flex-end;
  letter-spacing: 1px;
  padding: 0 5px;
  text-align: right;
`;

const App = () => {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Wrapper
      theme={store.theme}
    >
      <Calculator
        theme={store.theme}
      >
        <Menu
          dispatch={dispatch}
          scientificMode={store.scientificMode}
          theme={store.theme}
        />

        <Display
          theme={store.theme}
        >
          {store.display}
        </Display>

        <KeyPad
          dispatch={dispatch}
          scientificMode={store.scientificMode}
          theme={store.theme}
        />
      </Calculator>
    </Wrapper>
  );
}

export default App;
