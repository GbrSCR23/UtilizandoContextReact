import { useContext } from "react"; //importando useContext, pois vc vai usar esse hook e ele só funciona com a importação dele na pagina

import { CounterContext } from "../context/CounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useContext(CounterContext);

  // 5 - contexto mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor contador: {counter}</p>
      
    </div>
  );
};

export default About;
