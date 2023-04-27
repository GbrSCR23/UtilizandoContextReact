import "./Home.css";

import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // 2 - criar provider
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext(); //acessando a propriedade color, pegando o color 

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1> 
      <p>Valor contador: {counter}</p>

      
      {/* 3 - alterar o valor do contexto 
      pegando o valor color e usando no h1 */}
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("BLACK")}>Preto</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>

      </div>
    </div>
  );
};

export default Home;
